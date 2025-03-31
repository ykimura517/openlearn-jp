// app/api/v1/courses/[id]/related/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { RelatedCoursesResponse } from '@/types/api';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // まず、コース間の関連情報を取得
    const relations = await prisma.masterCourseRelation.findMany({
      where: { courseId: params.id },
    });

    // 関連先のコースID一覧を抽出
    const relatedCourseIds = relations.map(
      (relation) => relation.relatedCourseId
    );

    // 関連するコース情報をMasterCourseから取得
    const courses = await prisma.masterCourse.findMany({
      where: {
        id: { in: relatedCourseIds },
      },
    });

    // APIの型に合わせてマッピング（タイトルはnullableの可能性があるため空文字にする対応）
    const relatedCourses = courses.map((course) => ({
      id: course.id,
      title: course.title || '',
      level: course.level,
      durationMin: course.durationMin || 0,
    }));

    const response: RelatedCoursesResponse = { courses: relatedCourses };

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
