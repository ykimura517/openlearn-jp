// app/api/v1/courses/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import type { CoursesResponse } from '@/types/api';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  // URLからクエリパラメータを取得
  const searchParams = request.nextUrl.searchParams;
  const page = Number.parseInt(searchParams.get('page') || '1');
  const pageSize = Number.parseInt(searchParams.get('pageSize') || '9');
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'all';
  const level = searchParams.get('level') || 'all';

  // フィルタ条件の作成
  const filters: any = {};

  if (search) {
    filters.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { summary: { contains: search, mode: 'insensitive' } },
    ];
  }

  if (category !== 'all') {
    // MasterCourse のリレーションである category の id で絞り込み
    filters.category = { id: category };
  }

  if (level !== 'all') {
    // MasterCourse の difficulty として保存している前提
    filters.difficulty = level;
  }

  // 総件数の取得
  const totalCourses = await prisma.masterCourse.count({
    where: filters,
  });

  // ページネーション
  const totalPages = Math.ceil(totalCourses / pageSize);
  const skip = (page - 1) * pageSize;

  // コース情報の取得（カテゴリ情報と、コースコンテンツの件数も同時に取得）
  const coursesData = await prisma.masterCourse.findMany({
    where: filters,
    skip,
    take: pageSize,
    include: {
      category: true,
      _count: { select: { courseContents: true } },
    },
    orderBy: { createdAt: 'desc' },
  });

  // DBのデータをAPIのレスポンス用に整形
  const courses = coursesData.map((course) => ({
    id: course.id,
    title: course.title as string,
    description: course.description || course.summary || '',
    category: course.category.id,
    categoryName: course.category.name,
    level: course.difficulty ? course.difficulty : '未設定',
    // duration はDBに情報が無い場合、仮の値（例："未設定"）を設定
    duration: String(course.durationMin) || '未設定',
    articles: course._count.courseContents,
  }));

  const response: CoursesResponse = {
    courses,
    totalCourses,
    totalPages,
  };

  return NextResponse.json(response);
}
