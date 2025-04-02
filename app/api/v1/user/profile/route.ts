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
    const { username, occupation, userId, birthDate } = body; //ここでのuserIdはdisplayIdに相当
    //登録フロー上、先にからデータが必ず作られている
    const user = await prisma.user.update({
      where: { id: firebaseId },
      data: {
        name: username,
        occupation,
        displayId: userId,
        birthDate,
      },
    });
    // TODO: displayIdの重複でエラーになった場合、その旨を返す

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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
