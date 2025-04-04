// app/api/v1/courses/[courseId]/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { CourseDetail } from '@/types/api';

export async function GET(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    // MasterCourseから該当のコース情報を取得
    const course = await prisma.masterCourse.findUnique({
      where: { id: params.courseId },
      include: {
        // コースのカテゴリー情報
        category: true,
        // コースを構成する各記事
        courseArticles: true,
      },
    });

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    // APIの型に合わせて、各記事情報をマッピング（sequence順にソート）
    const articleSummaries = course.courseArticles
      .map((article) => ({
        id: article.id,
        sequence: article.sequence,
        title: article.title || '',
        durationMin: article.durationMin || 0,
      }))
      .sort((a, b) => a.sequence - b.sequence);

    const courseDetail: CourseDetail = {
      id: course.id,
      title: course.title || '',
      summary: course.summary || '',
      description: course.description || '',
      categoryId: course.categoryId,
      categoryName: course.category?.name || '',
      level: course.level,
      durationMin: course.durationMin || 0,
      targetAudience: course.targetAudience || '',
      prerequisites: course.prerequisites || '',
      articleSummaries,
    };

    return NextResponse.json(courseDetail);
  } catch (error: any) {
    const msg =
      process.env.NEXT_PUBLIC_ENV !== 'prod'
        ? error.message
        : 'INTERNAL_SERVER_ERROR';
    console.error('Error fetching course details:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
