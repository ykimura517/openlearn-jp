// app/api/v1/auth/register/route.ts
import { NextResponse } from 'next/server';
import admin from '@/lib/firebase-admin';

// DBへのユーザー登録処理を実装する場合、ここで呼び出す
// import { createUserProfile } from "@/lib/db"

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
    // console.log(decodedToken)
    // {
    //     name: 'hoge山',
    //     picture: 'https://lh3.googleusercontent.com/a/hoge',
    //     iss: 'https://securetoken.google.com/hoge',
    //     aud: 'hoge',
    //     auth_time: 1742984689,
    //     user_id: 'fhowghoerg',
    //     sub: 'foweirheiorhgoner',
    //     iat: 1742984689,
    //     exp: 1742988289,
    //     email: 'hoge@gmail.com',
    //     email_verified: true,
    //     firebase: {
    //       identities: { 'google.com': [Array], email: [Array] },
    //       sign_in_provider: 'google.com'
    //     },
    //     uid: 'J4sURtvomOev3L0EHxqY2EjH7pC3'
    //   }
    // decodedToken.uid がFirebaseユーザーのIDです

    // TODO: firebaseのユーザーIDが既にDBに登録されているか確認する処理を実装する
    if (decodedToken.uid == 'eDb3uDrUPpZxfzWdqPlKGZcbQ052') {
      return NextResponse.json({ error: 'ALREADY_EXISTS' }, { status: 400 });
    }

    const uid = decodedToken.uid;

    const body = await request.json();
    const { userId, username, occupation, birthDate } = body;

    // ここでDBに{ firebaseUid: uid, userId, username, occupation, birthDate }を保存する処理を実装する
    // 例: await createUserProfile({ firebaseUid: uid, userId, username, occupation, birthDate })

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
