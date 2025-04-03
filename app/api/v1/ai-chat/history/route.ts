// app/api/v1/ai-chat/history/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
// ※ firebaseAdmin を利用してトークン検証を行う場合、以下のような関数を利用します
import { authenticate } from '@/lib/apiHandler';

export async function GET(request: Request) {
  try {
    const decodedToken = await authenticate(request);

    // クエリパラメータから articleId を取得
    const { searchParams } = new URL(request.url);
    const articleId = searchParams.get('articleId');
    if (!articleId) {
      return NextResponse.json(
        { error: 'articleId is required' },
        { status: 400 }
      );
    }

    // 6ヶ月前の日付を算出
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    // 指定された articleId に紐づくチャットルームを、認証済みユーザーで検索
    const chatRoom = await prisma.chatRoom.findFirst({
      where: {
        userId: decodedToken.uid,
        courseArticleId: articleId,
      },
    });

    if (!chatRoom) {
      return NextResponse.json({ messages: [] });
    }

    // チャットルーム内の、6ヶ月以内のチャットメッセージを取得
    const messages = await prisma.chatMessage.findMany({
      where: {
        chatRoomId: chatRoom.id,
        createdAt: {
          gte: sixMonthsAgo,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    // レスポンス用に整形
    const responseMessages = messages.map((msg) => ({
      id: msg.id,
      role: msg.role,
      content: msg.message,
      timestamp: msg.createdAt.toISOString(),
    }));

    return NextResponse.json({ messages: responseMessages });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
