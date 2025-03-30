// prisma/seed.ts
import { PrismaClient } from '../lib/__generated__/prisma';

const prisma = new PrismaClient();

async function main() {
  // ---------------------------
  // User
  // ---------------------------
  const user = await prisma.user.upsert({
    where: { id: 'user-001' },
    update: {},
    create: {
      id: 'user-001',
      displayId: 'user001',
      firebaseUserId: 'w4XaNBvYnORz5dJ9Mig1FwpxxVi1',
      name: 'Test User',
      occupation: 'Engineer',
      birthDate: '1990-01-01',
      plan: 'FREE',
    },
  });

  // ---------------------------
  // MasterCategory
  // ---------------------------
  const categories = [
    {
      id: 'programming',
      name: 'プログラミング',
      description: 'プログラミングに関するコースや試験',
    },
    {
      id: 'ai',
      name: '生成AI',
      description: '生成AIに関するコースや試験',
    },
    {
      id: 'web-development',
      name: 'Web開発',
      description: 'Web開発に関するコースや試験',
    },
  ];

  for (const category of categories) {
    await prisma.masterCategory.upsert({
      where: { id: category.id },
      update: {},
      create: category,
    });
  }

  // ---------------------------
  // MasterTag
  // ---------------------------
  const tags = [
    { id: 'python', name: 'python' },
    { id: 'fastapi', name: 'fastapi' },
    { id: 'machine-learning', name: 'machine-learning' },
  ];

  for (const tag of tags) {
    await prisma.masterTag.upsert({
      where: { id: tag.id },
      update: {},
      create: tag,
    });
  }

  // ---------------------------
  // MasterCourse (2件作成して関連付けのサンプルとする)
  // ---------------------------
  const course1 = {
    id: 'course-001',
    title: 'はじめてのプログラミング',
    summary: 'プログラミングの基本を学ぶコースです。',
    description: 'このコースでは、プログラミングの基礎から学びます。',
    targetAudience: '初心者',
    level: '初級',
    difficulty: 1,
    durationMin: 120,
    categoryId: 'programming',
  };

  await prisma.masterCourse.upsert({
    where: { id: course1.id },
    update: course1,
    create: course1,
  });

  // course1 にタグを関連付け (python, fastapi)
  await prisma.masterCourse.update({
    where: { id: course1.id },
    data: {
      tags: {
        set: [{ id: 'python' }, { id: 'fastapi' }],
      },
    },
  });

  const course2 = {
    id: 'course-002',
    title: '中級プログラミング',
    summary: 'プログラミングの中級レベルの内容を学ぶコースです。',
    description: 'このコースでは、より実践的なプログラミングスキルを磨きます。',
    targetAudience: '中級者',
    level: '中級',
    difficulty: 2,
    durationMin: 180,
    categoryId: 'programming',
  };

  await prisma.masterCourse.upsert({
    where: { id: course2.id },
    update: course2,
    create: course2,
  });

  // course2 にタグを関連付け (python)
  await prisma.masterCourse.update({
    where: { id: course2.id },
    data: {
      tags: {
        set: [{ id: 'python' }],
      },
    },
  });

  // ---------------------------
  // MasterCourseRelation (course1 と course2 の関連付け)
  // ---------------------------
  await prisma.masterCourseRelation.upsert({
    where: { id: 'relation-001' },
    update: {},
    create: {
      id: 'relation-001',
      courseId: course1.id,
      relatedCourseId: course2.id,
      score: 0.85,
    },
  });

  // ---------------------------
  // MasterCourseArticle (course1 の記事)
  // ---------------------------
  const article = {
    id: 'article-001',
    courseId: course1.id,
    sequence: 1,
    title: 'イントロダクション',
    content: 'このセクションでは、プログラミングの基本概念を紹介します。',
    durationMin: 30,
  };

  await prisma.masterCourseArticle.upsert({
    where: { id: article.id },
    update: article,
    create: article,
  });

  // ---------------------------
  // MasterCourseArticleExercise (記事に紐づく演習問題)
  // ---------------------------
  await prisma.masterCourseArticleExercise.upsert({
    where: { id: 'exercise-001' },
    update: {},
    create: {
      id: 'exercise-001',
      courseArticleId: article.id,
      exerciseType: 'SELECTION', // または 'TEXT'
      question: 'プログラミング言語の例として正しいものはどれですか？',
      options: JSON.stringify(['JavaScript', 'HTML', 'CSS']),
      correctAnswer: 'JavaScript',
    },
  });

  // ---------------------------
  // MasterCourseArticleFAQ (記事に紐づく FAQ)
  // ---------------------------
  await prisma.masterCourseArticleFAQ.upsert({
    where: { id: 'faq-001' },
    update: {},
    create: {
      id: 'faq-001',
      courseArticleId: article.id,
      question: 'このコースの前提知識は何ですか？',
      answer: '基本的なパソコン操作ができれば十分です。',
    },
  });

  // ---------------------------
  // ChatRoom (ユーザーと記事に紐づくチャットルーム)
  // ---------------------------
  await prisma.chatRoom.upsert({
    where: { id: 'chatroom-001' },
    update: {},
    create: {
      id: 'chatroom-001',
      userId: user.id,
      courseArticleId: article.id,
    },
  });

  // ---------------------------
  // ChatMessage (チャットルーム内のメッセージ)
  // ---------------------------
  await prisma.chatMessage.upsert({
    where: { id: 'chatmessage-001' },
    update: {},
    create: {
      id: 'chatmessage-001',
      chatRoomId: 'chatroom-001',
      userId: user.id,
      role: 'USER',
      message: 'このレッスンの内容について質問があります。',
      masterCourseArticleId: article.id,
    },
  });

  await prisma.chatMessage.upsert({
    where: { id: 'chatmessage-002' },
    update: {},
    create: {
      id: 'chatmessage-002',
      chatRoomId: 'chatroom-001',
      userId: null, // AI の場合は userId は null
      role: 'AI',
      message: 'どの部分についてご質問でしょうか？',
      masterCourseArticleId: article.id,
    },
  });

  // ---------------------------
  // MasterExam (試験)
  // ---------------------------
  const exam = {
    id: 'exam-001',
    title: 'プログラミング基礎試験',
    description: 'プログラミングの基本知識を問う試験です。',
    level: 1,
    timeLimitMin: 60,
    categoryId: 'programming',
    passingScore: 70,
  };

  await prisma.masterExam.upsert({
    where: { id: exam.id },
    update: exam,
    create: exam,
  });

  // ---------------------------
  // MasterExamQuestion (試験問題)
  // ---------------------------
  await prisma.masterExamQuestion.upsert({
    where: { id: 'exam-question-001' },
    update: {},
    create: {
      id: 'exam-question-001',
      examId: exam.id,
      sequence: 1,
      score: 10,
      question: 'プログラミングとは何ですか？',
      questionType: 'TEXT',
      options: null,
      correctAnswer: 'コンピュータに指示を与えるための言語',
    },
  });

  // ---------------------------
  // ExamSubmission (試験の受験結果)
  // ---------------------------
  await prisma.examSubmission.upsert({
    where: { id: 'submission-001' },
    update: {},
    create: {
      id: 'submission-001',
      examId: exam.id,
      userId: user.id,
      score: 10,
      percentile: 90,
    },
  });

  // ---------------------------
  // ExamAnswer (試験問題に対する解答)
  // ---------------------------
  await prisma.examAnswer.upsert({
    where: { id: 'exam-answer-001' },
    update: {},
    create: {
      id: 'exam-answer-001',
      examSubmissionId: 'submission-001',
      examQuestionId: 'exam-question-001',
      answer: 'コンピュータに指示を与えるための言語',
      isCorrect: true,
    },
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
