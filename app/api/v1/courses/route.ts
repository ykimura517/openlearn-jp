// app/api/v1/courses/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { CoursesResponse, Course } from '@/types/api';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page')) || 1;
  const pageSize = Number(url.searchParams.get('pageSize')) || 9;
  const search = url.searchParams.get('search') || '';
  const categoryFilter = url.searchParams.get('category') || 'all';
  const levelFilter = url.searchParams.get('level') || 'all';

  // 検索条件の作成
  const where: any = {};
  if (search) {
    where.title = { contains: search, mode: 'insensitive' };
  }
  if (categoryFilter !== 'all') {
    where.categoryId = categoryFilter;
  }
  if (levelFilter !== 'all') {
    where.level = levelFilter;
  }

  // 該当するコースの総件数を取得
  const totalCourses = await prisma.masterCourse.count({ where });

  // ページ数の計算
  const totalPages = Math.ceil(totalCourses / pageSize);

  // ページネーションに基づいてデータを取得
  const coursesData = await prisma.masterCourse.findMany({
    where,
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: { createdAt: 'asc' },
    include: {
      category: true,
      courseArticles: true,
    },
  });

  // APIで定義しているCourse型へ変換
  const courses: Course[] = coursesData.map((course) => ({
    id: course.id,
    title: course.title || '',
    summary: course.summary || '',
    description: course.description || '',
    category: course.category.id,
    categoryName: course.category.name,
    level: course.level,
    durationMin: course.durationMin || 0,
    articleCount: course.courseArticles.length,
  }));

  const response: CoursesResponse = {
    courses,
    totalCourses,
    totalPages,
  };

  return NextResponse.json(response);
}
