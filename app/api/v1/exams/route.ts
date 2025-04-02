// app/api/v1/exams/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { ExamsResponse, ExamOutline } from '@/types/api';

export async function GET(request: Request) {
  // このAPIは認証不要
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 1;
  const pageSize = Number(searchParams.get('pageSize')) || 10;
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'all';
  const level = searchParams.get('level') || 'all';

  // where 条件の組み立て
  const whereClause: any = {};
  if (search) {
    whereClause.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ];
  }
  if (category !== 'all') {
    whereClause.categoryId = category;
  }
  if (level !== 'all') {
    whereClause.level = level;
  }

  try {
    const totalExams = await prisma.masterExam.count({
      where: whereClause,
    });

    const totalPages = Math.ceil(totalExams / pageSize);
    const exams = await prisma.masterExam.findMany({
      where: whereClause,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        category: true,
        examQuestions: true,
      },
    });

    // API のレスポンス型に合わせてマッピング
    const examOutlines: ExamOutline[] = exams.map((exam) => ({
      id: exam.id,
      title: exam.title,
      description: exam.description,
      categoryId: exam.categoryId,
      categoryName: exam.category.name,
      level: exam.level.toString(),
      questions: exam.examQuestions.length,
      time: `${exam.timeLimitMin}分`,
    }));

    const responseData: ExamsResponse = {
      exams: examOutlines,
      totalExams,
      totalPages,
    };

    return NextResponse.json(responseData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
