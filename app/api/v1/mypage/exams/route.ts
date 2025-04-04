// app/api/v1/mypage/exams/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { UserExamResult } from '@/types/api';
import { authenticate } from '@/lib/apiHandler';

export async function GET(request: Request) {
  try {
    const decodedToken = await authenticate(request);
    const userId = decodedToken.uid;
    const submissions = await prisma.examSubmission.findMany({
      where: { userId },
      include: {
        exam: {
          include: {
            category: true,
          },
        },
      },
    });
    const results: UserExamResult[] = submissions.map((submission) => ({
      subMissionId: submission.id,
      examId: submission.exam.id,
      examTitle: submission.exam.title,
      date: submission.submittedAt.toISOString(),
      score: submission.score,
      passingScore: submission.exam.passingScore,
      examCategoryName: submission.exam.category.name,
      examLevel: String(submission.exam.level),
    }));
    return NextResponse.json(results);
  } catch (error: any) {
    const msg =
      process.env.NEXT_PUBLIC_ENV !== 'prod'
        ? error.message
        : 'INTERNAL_SERVER_ERROR';
    console.error('Error fetching exam results:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
