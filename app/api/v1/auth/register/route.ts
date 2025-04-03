// app/api/v1/auth/register/route.ts
import { NextResponse } from 'next/server';
import admin from '@/lib/firebase-admin';
import { prisma } from '@/lib/prisma';
import { ulid } from 'ulid';
import Stripe from 'stripe';

// Stripe初期化。環境変数STRIPE_SECRET_KEYが設定されている前提です。
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

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

    // Stripeでユーザー登録（Customer作成）
    const stripeCustomer = await stripe.customers.create({
      email: decodedToken.email || undefined,
      metadata: {
        firebaseUserId: uid,
      },
    });

    // ユーザープロフィールをDBに登録
    await prisma.user.create({
      data: {
        id: uid,
        displayId: ulid().slice(0, 20), // 一旦ulidを割り振っておく。（長いとレイアウトに影響するので一旦20文字）
        firebaseUserId: uid,
        stripeUserId: stripeCustomer.id,
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
