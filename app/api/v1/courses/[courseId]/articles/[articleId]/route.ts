// app/api/v1/courses/[courseId]/articles/[articleId]/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { CourseArticleDetail } from '@/types/api';

export async function GET(
  request: Request,
  { params }: { params: { courseId: string; articleId: string } }
) {
  try {
    // courseIdとarticleIdで記事を検索し、リレーションでコース情報を取得
    const article = await prisma.masterCourseArticle.findFirst({
      where: {
        id: params.articleId,
        courseId: params.courseId,
      },
      include: {
        course: true,
      },
    });

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // APIの型に合わせて整形
    const result: CourseArticleDetail = {
      id: article.id,
      title: article.title || '',
      content: article.content || '',
      courseId: article.courseId,
      courseTitle: article.course?.title || '',
      durationMin: article.durationMin || 0,
    };

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
