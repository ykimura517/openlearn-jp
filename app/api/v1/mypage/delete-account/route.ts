// app/api/v1/mypage/delete-account/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { DeleteAccountRequest, OkResponse } from '@/types/api';
import admin from 'firebase-admin';

// Firebase Admin SDK の初期化（初回のみ）
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      // 改行コードの置換が必要な場合あり
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

export async function POST(request: Request) {
  try {
    // リクエストボディから退会理由と確認テキストを取得
    const body: DeleteAccountRequest = await request.json();
    const { reason, confirmation } = body;

    if (confirmation !== '退会します') {
      return NextResponse.json(
        { error: '確認テキストが正しくありません。' },
        { status: 400 }
      );
    }

    // リクエストヘッダーから Authorization トークンを取得
    const authHeader = request.headers.get('Authorization') || '';
    if (!authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: '認証トークンがありません。' },
        { status: 401 }
      );
    }
    const token = authHeader.split('Bearer ')[1];

    // Firebase Admin SDK でトークンを検証し、ユーザーID (uid) を取得
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    // Firebase 上のユーザーを削除
    await admin.auth().deleteUser(uid);

    // DBのユーザー情報を論理削除（deletedAt, deleteReason を更新）
    await prisma.user.update({
      where: { id: uid },
      data: {
        deletedAt: new Date(),
        deleteReason: reason,
      },
    });

    const res: OkResponse = { ok: true };
    return NextResponse.json(res);
  } catch (error: any) {
    const msg =
      process.env.NEXT_PUBLIC_ENV !== 'prod'
        ? error.message
        : 'INTERNAL_SERVER_ERROR';
    console.error('Error during account deletion:', msg);

    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
