// app/api/v1/auth/register/route.ts
import { NextResponse } from 'next/server';
import admin from '@/lib/firebase-admin';
import { prisma } from '@/lib/prisma';
import { ulid } from 'ulid';

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json(
        { error: '認証情報がありません。' },
        { status: 401 }
      );
    }
    const token = authHeader.split(' ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    // decodedToken.uidがFirebaseユーザーのIDとなります

    // FirebaseのユーザーIDが既にDBに登録されているか確認
    const existingUser = await prisma.user.findUnique({
      where: {
        id: decodedToken.uid,
      },
    });
    if (existingUser) {
      return NextResponse.json({ error: 'ALREADY_EXISTS' }, { status: 400 });
    }

    const uid = decodedToken.uid;

    // Stripeの登録処理は未実装のため、ログで警告を出してスキップ
    console.warn(`Stripe registration skipped for user: ${uid}`);

    // ユーザープロフィールをDBに登録
    // prismaのUserモデルに合わせて、firebaseUserIdはuid、displayIdはリクエストからのuserIdを利用
    await prisma.user.create({
      data: {
        id: uid,
        displayId: ulid().slice(0, 20), // 一旦ulidを割り振っておく。（長いとレイアウトに影響するので一旦20文字）
        firebaseUserId: uid,
        name: null,
        occupation: null,
        birthDate: null,
      },
    });

    return NextResponse.json(
      { message: 'ユーザー登録に成功しました。' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'エラーが発生しました。' },
      { status: 500 }
    );
  }
}
