// app/api/v1/ai-chat/route.ts

import { type NextRequest, NextResponse } from 'next/server';
import { authenticate } from '@/lib/apiHandler';
import { prisma } from '@/lib/prisma';
import type { AIChatResponse } from '@/types/api';
import { ChatOpenAI } from '@langchain/openai';
import {
  HumanMessage,
  SystemMessage,
  AIMessage,
  BaseMessage,
} from '@langchain/core/messages';
import { ulid } from 'ulid';

export const maxDuration = 60; // レスポンスに時間を要することが想定されるのでvercelでの起動時間を60秒に伸ばす

export async function POST(request: NextRequest) {
  try {
    // 認証チェック
    const decodedToken = await authenticate(request);
    if (!decodedToken) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const userId = decodedToken.uid;

    // リクエストボディの解析
    // 変更：articleTitle, history ではなく articleId を使用する
    const body: { message: string; articleId?: string } = await request.json();
    const { message, articleId } = body;

    if (!message) {
      return NextResponse.json(
        { message: 'MESSAGE_REQUIRED' },
        { status: 400 }
      );
    }

    if (message.length > 8000) {
      return NextResponse.json(
        { message: 'MESSAGE_TOO_LONG' },
        { status: 400 }
      );
    }

    if (!articleId) {
      return NextResponse.json(
        { message: 'ARTICLE_ID_REQUIRED' },
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
    // チャットルームにメッセージを保存
    await prisma.chatMessage.create({
      data: {
        id: ulid(),
        message: message,
        userId: userId,
        role: 'USER',
        chatRoomId: chatRoom.id,
        masterCourseArticleId: articleId,
        createdAt: new Date(),
      },
    });

    // 取得したチャットルームから、直近半年以内のメッセージを時系列昇順に結合
    let conversationHistory: (SystemMessage | AIMessage | HumanMessage)[];
    if (chatRoom) {
      const chatMessages = await prisma.chatMessage.findMany({
        where: {
          chatRoomId: chatRoom.id,
          createdAt: { gte: sixMonthsAgo },
        },
        orderBy: { createdAt: 'asc' },
      });
      conversationHistory = chatMessages.map((msg) => {
        if (msg.role === 'AI') {
          return new AIMessage(msg.message);
        } else {
          return new HumanMessage(msg.message);
        }
      });
    } else {
      conversationHistory = [];
    }

    // 記事内容は DB から取得した内容（content が存在しなければ title を利用）
    const articleContent = article.content || article.title || '';

    // プロンプトの作成
    const systemPrompt = `You are an excellent AI assistant who responds to questions about articles published on the learning service OpenLearn JP.

Content of the relevant article: 
${articleContent}
`;

    // langchain を通じて OpenAI にリクエスト（環境変数からモデル名・APIキーを取得）
    const modelName = process.env.OPENAI_MODEL || 'gpt-4o-mini';
    // model
    const model = new ChatOpenAI({
      model: modelName,
      temperature: 0.1,
    }).withConfig({
      runName: '[OL]記事質問:' + article.title + '_' + articleId,
    });
    const systemMessages = [new SystemMessage(systemPrompt)];
    const messages: BaseMessage[] = [...systemMessages, ...conversationHistory];
    const aiResponseText = await model.invoke(messages);

    // AIのレスポンスをDBに保存
    await prisma.chatMessage.create({
      data: {
        id: ulid(),
        message: aiResponseText.content.toString(),
        userId: userId,
        role: 'AI',
        chatRoomId: chatRoom.id,
        masterCourseArticleId: articleId,
        createdAt: new Date(),
      },
    });

    console.log('AI Response:', aiResponseText);
    // レスポンスの作成
    const response: AIChatResponse = {
      message: aiResponseText.content.toString(),
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error: any) {
    console.error('AI Chat API Error:', error);
    const msg =
      process.env.NEXT_PUBLIC_ENV !== 'prod'
        ? error.message
        : 'INTERNAL_SERVER_ERROR';
    console.error('Error in AI Chat API:', msg);
    return NextResponse.json({ message: msg }, { status: 500 });
  }
}
