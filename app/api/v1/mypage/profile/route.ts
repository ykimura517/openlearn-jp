// app/api/v1/mypage/profile/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { User as ApiUser } from '@/types/api';
import { authenticate } from '@/lib/apiHandler';

export async function GET(request: Request) {
  try {
    const decodedToken = await authenticate(request);
    const userId = decodedToken.uid;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    const apiUser: ApiUser = {
      id: user.id,
      displayId: user.displayId,
      name: user.name || '',
      occupation: user.occupation || '',
      birthDate: user.birthDate || '',
      joinedDate: user.createdAt.toISOString(),
    };
    return NextResponse.json(apiUser);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const decodedToken = await authenticate(request);
    const userId = decodedToken.uid;
    const body = await request.json();
    const { name, occupation, displayId } = body;

    if (name.length > 15) {
      return NextResponse.json({ message: 'NAME_TOO_LONG' }, { status: 400 });
    }
    if (occupation.length > 30) {
      return NextResponse.json(
        { message: 'OCCUPATION_TOO_LONG' },
        { status: 400 }
      );
    }
    if (displayId.length > 20) {
      return NextResponse.json(
        { message: 'DISPLAY_ID_TOO_LONG' },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        occupation,
        displayId,
      },
    });
    if (name.length > 15) {
      return NextResponse.json({ message: 'NAME_TOO_LONG' }, { status: 400 });
    }
    if (occupation.length > 30) {
      return NextResponse.json(
        { message: 'OCCUPATION_TOO_LONG' },
        { status: 400 }
      );
    }
    if (displayId.length > 20) {
      return NextResponse.json(
        { message: 'DISPLAY_ID_TOO_LONG' },
        { status: 400 }
      );
    }

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
        { message: 'DISPLAY_ID_ALREADY_USED' },
        { status: 409 }
      );
    }
    // その他のエラーは500エラーとして返す
    const msg =
      process.env.NEXT_PUBLIC_ENV !== 'prod'
        ? error.message
        : 'INTERNAL_SERVER_ERROR';
    console.error('Error updating user profile:', msg);

    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
