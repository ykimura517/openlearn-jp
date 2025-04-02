// app/api/v1/user/profile/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { User as ApiUser } from '@/types/api';
import { authenticate } from '@/lib/apiHandler';

export async function POST(request: Request) {
  try {
    const decodedToken = await authenticate(request);
    const firebaseId = decodedToken.uid;
    const body = await request.json();
    const { username, occupation, userId, birthDate } = body; // ここでのuserIdはdisplayIdに相当

    // 登録フロー上、先に空のデータが必ず作られているため更新する
    const user = await prisma.user.update({
      where: { id: firebaseId },
      data: {
        name: username,
        occupation,
        displayId: userId,
        birthDate,
      },
    });

    const responseUser: ApiUser = {
      id: user.id,
      displayId: user.displayId,
      name: user.name || '',
      occupation: user.occupation || '',
      birthDate: user.birthDate || '',
      joinedDate: user.createdAt.toISOString(),
    };

    return NextResponse.json(responseUser);
  } catch (error: any) {
    // displayIdの重複によるユニーク制約違反の場合、PrismaエラーコードP2002が返る
    if (
      error.code === 'P2002' &&
      error.meta &&
      error.meta.target &&
      error.meta.target.includes('displayId')
    ) {
      return NextResponse.json(
        { error: 'DISPLAY_ID_ALREADY_USED' },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
