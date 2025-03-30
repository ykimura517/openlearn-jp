// prisma/seed.ts
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../lib/__generated__/prisma';
const prisma = new PrismaClient();

async function main() {
  // 1. ユーザー (User)
  const user = await prisma.user.upsert({
    where: { id: 'user_1' },
    update: {
      displayId: 'user001',
      firebaseUserId: 'firebase_user_1',
      plan: 'FREE',
    },
    create: {
      id: 'user_1',
      displayId: 'user001',
      firebaseUserId: 'firebase_user_1',
      plan: 'FREE',
    },
  });

  // 2. カテゴリ (MasterCategory)
  // 大カテゴリー
  const categoryProgramming = await prisma.masterCategory.upsert({
    where: { id: 'programming' },
    update: {
      name: 'プログラミング',
      level: 1,
      parentId: null,
    },
    create: {
      id: 'programming',
      name: 'プログラミング',
      level: 1,
      parentId: null,
    },
  });
  // 中カテゴリー（大カテゴリーの子）
  const categoryPython = await prisma.masterCategory.upsert({
    where: { id: 'python' },
    update: {
      name: 'Python',
      level: 2,
      parentId: categoryProgramming.id,
    },
    create: {
      id: 'python',
      name: 'Python',
      level: 2,
      parentId: categoryProgramming.id,
    },
  });

  // 3. タグ (MasterTag)
  const tagBeginner = await prisma.masterTag.upsert({
    where: { id: 'tag_beginner' },
    update: { name: '初心者向け' },
    create: { id: 'tag_beginner', name: '初心者向け' },
  });

  // 4. コース (MasterCourse)
  const course = await prisma.masterCourse.upsert({
    where: { id: 'course_intro_python' },
    update: {
      title: 'Python入門',
      summary: 'Pythonの基礎を学ぶコースです。',
      description: 'Pythonの文法、データ型、制御構文などを解説します。',
      targetAudience: 'プログラミング初心者',
      difficulty: '初級',
      category: { connect: { id: categoryPython.id } },
      tags: { connect: [{ id: tagBeginner.id }] },
    },
    create: {
      id: 'course_intro_python',
      title: 'Python入門',
      summary: 'Pythonの基礎を学ぶコースです。',
      description: 'Pythonの文法、データ型、制御構文などを解説します。',
      targetAudience: 'プログラミング初心者',
      difficulty: '初級',
      category: { connect: { id: categoryPython.id } },
      tags: { connect: [{ id: tagBeginner.id }] },
    },
  });

  // 5. コースコンテンツ (MasterCourseContent)
  const content = await prisma.masterCourseContent.upsert({
    where: { id: 'content_1' },
    update: {
      sequence: 1,
      title: 'はじめに',
      content: 'この章ではPythonの概要について学びます。',
      course: { connect: { id: course.id } },
    },
    create: {
      id: 'content_1',
      courseId: course.id,
      sequence: 1,
      title: 'はじめに',
      content: 'この章ではPythonの概要について学びます。',
    },
  });

  // 6. 演習問題 (MasterExercise)
  const exercise = await prisma.masterExercise.upsert({
    where: { id: 'exercise_1' },
    update: {
      exerciseType: 'SELECTION',
      question: 'Pythonで変数を宣言する正しい方法はどれ？',
      options: JSON.stringify(['var x = 10;', 'x = 10', 'int x = 10;']),
      correctAnswer: 'x = 10',
      courseContent: { connect: { id: content.id } },
    },
    create: {
      id: 'exercise_1',
      courseContentId: content.id,
      exerciseType: 'SELECTION',
      question: 'Pythonで変数を宣言する正しい方法はどれ？',
      options: JSON.stringify(['var x = 10;', 'x = 10', 'int x = 10;']),
      correctAnswer: 'x = 10',
    },
  });

  // 7. FAQ (MasterCourseFAQ)
  const faq = await prisma.masterCourseFAQ.upsert({
    where: { id: 'faq_1' },
    update: {
      question: 'Pythonのインストール方法は？',
      answer: '公式サイトからインストーラーをダウンロードしてください。',
      course: { connect: { id: course.id } },
    },
    create: {
      id: 'faq_1',
      courseId: course.id,
      question: 'Pythonのインストール方法は？',
      answer: '公式サイトからインストーラーをダウンロードしてください。',
    },
  });

  // 8. チャットルーム (ChatRoom)
  const chatRoom = await prisma.chatRoom.upsert({
    where: { id: 'chatroom_1' },
    update: {
      user: { connect: { id: user.id } },
      courseContent: { connect: { id: content.id } },
    },
    create: {
      id: 'chatroom_1',
      userId: user.id,
      courseContentId: content.id,
    },
  });

  // 9. チャットメッセージ (ChatMessage)
  const chatMessage = await prisma.chatMessage.upsert({
    where: { id: 'chatmessage_1' },
    update: {
      chatRoom: { connect: { id: chatRoom.id } },
      user: { connect: { id: user.id } },
      role: 'USER',
      message: 'このコース、わかりやすいですね！',
      MasterCourseContent: { connect: { id: content.id } },
    },
    create: {
      id: 'chatmessage_1',
      chatRoomId: chatRoom.id,
      userId: user.id,
      role: 'USER',
      message: 'このコース、わかりやすいですね！',
      masterCourseContentId: content.id,
    },
  });

  // 10. 試験 (MasterExam)
  const exam = await prisma.masterExam.upsert({
    where: { id: 'exam_1' },
    update: {
      title: 'Python基礎試験',
      description: 'Pythonの基礎知識を確認する試験です。',
      category: { connect: { id: categoryPython.id } },
    },
    create: {
      id: 'exam_1',
      title: 'Python基礎試験',
      description: 'Pythonの基礎知識を確認する試験です。',
      categoryId: categoryPython.id,
    },
  });

  // 11. 試験問題 (MasterExamQuestion)
  const examQuestion = await prisma.masterExamQuestion.upsert({
    where: { id: 'examquestion_1' },
    update: {
      exam: { connect: { id: exam.id } },
      question: 'Pythonの拡張子は何ですか？',
      questionType: 'SELECTION',
      options: JSON.stringify(['.py', '.js', '.java']),
      correctAnswer: '.py',
    },
    create: {
      id: 'examquestion_1',
      examId: exam.id,
      question: 'Pythonの拡張子は何ですか？',
      questionType: 'SELECTION',
      options: JSON.stringify(['.py', '.js', '.java']),
      correctAnswer: '.py',
    },
  });

  // 12. 試験の受験記録 (ExamSubmission)
  const examSubmission = await prisma.examSubmission.upsert({
    where: { id: 'examsubmission_1' },
    update: {
      exam: { connect: { id: exam.id } },
      user: { connect: { id: user.id } },
      score: 80.0,
      percentile: 90.0,
    },
    create: {
      id: 'examsubmission_1',
      examId: exam.id,
      userId: user.id,
      score: 80.0,
      percentile: 90.0,
    },
  });

  // 13. 試験の回答 (ExamAnswer)
  const examAnswer = await prisma.examAnswer.upsert({
    where: { id: 'examanswer_1' },
    update: {
      examSubmission: { connect: { id: examSubmission.id } },
      examQuestion: { connect: { id: examQuestion.id } },
      answer: '.py',
      isCorrect: true,
    },
    create: {
      id: 'examanswer_1',
      examSubmissionId: examSubmission.id,
      examQuestionId: examQuestion.id,
      answer: '.py',
      isCorrect: true,
    },
  });

  console.log('シードデータの投入（idempotent）が完了しました。');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
