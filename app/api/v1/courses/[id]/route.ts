// app/api/v1/courses/[id]/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import type { CourseDetail } from '@/types/api';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const courseId = id;

  // DBから指定されたコースIDのデータを取得
  const course = await prisma.masterCourse.findUnique({
    where: { id: courseId },
    include: {
      category: true,
      courseArticles: {
        orderBy: { sequence: 'asc' },
      },
    },
  });

  // コースが見つからない場合は404エラーを返す
  if (!course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  // コースコンテンツを、メインコンテンツとレッスンに分割する
  // ※ここでは、先頭の courseArticles を全体の content とし、以降を articles とする例です
  const mainContent = course.courseArticles[0] || { content: '' };
  const articles =
    course.courseArticles.length > 1
      ? course.courseArticles.slice(1).map((cc) => ({
          id: cc.id,
          title: cc.title || '',
          duration: '', // DBにdurationがないため、必要に応じて別途実装してください
        }))
      : [];

  const courseDetail: CourseDetail = {
    id: course.id,
    title: course.title || '',
    description: course.description || '',
    categoryId: course.categoryId,
    categoryName: course.category.name,
    level: String(course.difficulty) || '',
    durationMin: course.durationMin ?? -1,
    targetAudience: course.targetAudience || '',
    prerequisites: '特になし',
    articles,
    content: mainContent.content || '',
  };

  return NextResponse.json(courseDetail);
}
