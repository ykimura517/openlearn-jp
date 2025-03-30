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
      courseContents: {
        orderBy: { sequence: 'asc' },
      },
    },
  });

  // コースが見つからない場合は404エラーを返す
  if (!course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  // コースコンテンツを、メインコンテンツとレッスンに分割する
  // ※ここでは、先頭の courseContents を全体の content とし、以降を lessons とする例です
  const mainContent = course.courseContents[0] || { content: '' };
  const lessons =
    course.courseContents.length > 1
      ? course.courseContents.slice(1).map((cc) => ({
          id: cc.id,
          title: cc.title || '',
          duration: '', // DBにdurationがないため、必要に応じて別途実装してください
        }))
      : [];

  const courseDetail: CourseDetail = {
    id: course.id,
    title: course.title || '',
    description: course.description || '',
    category: course.categoryId,
    categoryName: course.category.name,
    level: course.difficulty || '',
    duration: course.durationMin ? String(course.durationMin) + '分' : '未設定',
    targetAudience: course.targetAudience || '',
    prerequisites: '特になし',
    lessons,
    content: mainContent.content || '',
  };

  return NextResponse.json(courseDetail);
}
