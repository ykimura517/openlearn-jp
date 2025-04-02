// app/api/v1/ai-chat/route.ts

import { type NextRequest, NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { prisma } from '@/lib/prisma';
import type { AIChatRequest, AIChatResponse } from '@/types/api';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ulid } from 'ulid';
export async function POST(request: NextRequest) {
  try {
    // 認証チェック
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const token = authHeader.split('Bearer ')[1];
    let decodedToken;
    try {
      decodedToken = await getAuth().verifyIdToken(token);
    } catch (error) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
    const userId = decodedToken.uid;

    // リクエストボディの解析
    // 変更：articleTitle, history ではなく articleId を使用する
    const body: { message: string; articleId?: string } = await request.json();
    const { message, articleId } = body;

    if (!message) {
      return NextResponse.json(
        { message: 'Message is required' },
        { status: 400 }
      );
    }
    if (!articleId) {
      return NextResponse.json(
        { message: 'Article ID is required' },
        { status: 400 }
      );
    }

    // DBから記事情報を取得
    const article = await prisma.masterCourseArticle.findUnique({
      where: { id: articleId },
    });
    if (!article) {
      return NextResponse.json(
        { message: 'Article not found' },
        { status: 404 }
      );
    }

    // 日本時間での今月の開始日時を計算
    const now = new Date();
    const jstNow = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const startOfMonthJST = new Date(
      jstNow.getFullYear(),
      jstNow.getMonth(),
      1
    );
    const startOfMonthUTC = new Date(
      startOfMonthJST.getTime() - 9 * 60 * 60 * 1000
    );

    // 同一ユーザーの今月のAI発言回数チェック（対象記事に紐づくチャットの場合）
    const aiMessageCount = await prisma.chatMessage.count({
      where: {
        role: 'AI',
        createdAt: { gte: startOfMonthUTC },
        chatRoom: {
          userId: userId,
        },
      },
    });
    if (aiMessageCount >= 5) {
      return NextResponse.json({ message: 'TOO_MANY_CHAT' }, { status: 400 });
    }

    // 対象記事に紐づくチャットルームの内、直近半年以内に作成された最新のものを取得
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    let chatRoom = await prisma.chatRoom.findFirst({
      where: {
        userId: userId,
        courseArticleId: articleId,
        createdAt: { gte: sixMonthsAgo },
      },
      orderBy: { createdAt: 'desc' },
    });
    // チャットルームが存在しない場合は新規作成
    if (!chatRoom) {
      chatRoom = await prisma.chatRoom.create({
        data: {
          id: ulid(),
          userId: userId,
          courseArticleId: articleId,
          createdAt: new Date(),
        },
      });
    }

    // 取得したチャットルームから、直近半年以内のメッセージを時系列昇順に結合
    let conversationHistory = '';
    if (chatRoom) {
      const chatMessages = await prisma.chatMessage.findMany({
        where: {
          chatRoomId: chatRoom.id,
          createdAt: { gte: sixMonthsAgo },
        },
        orderBy: { createdAt: 'asc' },
      });
      conversationHistory = chatMessages
        .map(
          (msg) =>
            `${msg.role === 'AI' ? 'アシスタント' : 'ユーザー'}: ${msg.message}`
        )
        .join('\n');
    }

    // 記事内容は DB から取得した内容（content が存在しなければ title を利用）
    const articleContent = article.content || article.title || '';

    // プロンプトの作成
    const systemPrompt = `あなたはOpenLearn JPという学習サービスに掲載された記事の質問に対応する優秀なAIアシスタントです。

対象の記事内容: ${articleContent}

これまでの会話履歴:
${conversationHistory}`;

    // langchain を通じて OpenAI にリクエスト（環境変数からモデル名・APIキーを取得）
    const modelName = process.env.OPENAI_MODEL || 'gpt-4o-mini';
    // model
    const model = new ChatOpenAI({ model: modelName, temperature: 0.1 });

    // messages
    const messages = [
      new SystemMessage(systemPrompt),
      new HumanMessage(message),
    ];

    const aiResponseText = await model.invoke(messages);
    console.log('AI Response:', aiResponseText);
    // レスポンスの作成
    const response: AIChatResponse = {
      message: aiResponseText.content.toString(),
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('AI Chat API Error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
