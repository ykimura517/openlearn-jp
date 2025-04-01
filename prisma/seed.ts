// prisma/seed.ts
import { PrismaClient } from '../lib/__generated__/prisma';

const prisma = new PrismaClient();

async function main() {
  // 既存データを一旦削除（シード処理実行前にクリーンな状態にするため）
  await prisma.examAnswer.deleteMany({});
  await prisma.examSubmission.deleteMany({});
  await prisma.masterExamQuestion.deleteMany({});
  await prisma.masterExam.deleteMany({});
  await prisma.masterCourseArticleFAQ.deleteMany({});
  await prisma.chatMessage.deleteMany({});
  await prisma.chatRoom.deleteMany({});
  await prisma.masterCourseArticleExercise.deleteMany({});
  await prisma.masterCourseArticle.deleteMany({});
  await prisma.masterCourseRelation.deleteMany({});
  await prisma.masterCourse.deleteMany({});
  await prisma.masterTag.deleteMany({});
  await prisma.masterCategory.deleteMany({});
  await prisma.user.deleteMany({});

  // ─── MasterCategoryのシード ─────────────────────────────
  const categoriesData = [
    {
      id: 'programming',
      name: 'プログラミング',
      description: 'プログラミングに関するコース',
    },
    { id: 'ai', name: '生成AI', description: '最新の生成AI技術を学ぶ' },
    {
      id: 'web-development',
      name: 'Web開発',
      description: 'Web開発の基礎と応用',
    },
  ];

  for (const cat of categoriesData) {
    await prisma.masterCategory.create({
      data: cat,
    });
  }

  // ─── MasterTagのシード ─────────────────────────────
  const tagsData = [
    { id: 'tag1', name: '初心者向け' },
    { id: 'tag2', name: '上級者向け' },
    { id: 'tag3', name: '実践' },
    { id: 'tag4', name: '基礎' },
    { id: 'tag5', name: '応用' },
  ];

  for (const tag of tagsData) {
    await prisma.masterTag.create({
      data: tag,
    });
  }

  // ─── MasterCourseと関連する記事・演習問題のシード ─────────────────────────────
  const coursesData = [
    {
      id: 'course1',
      title: 'JavaScript入門',
      summary: 'JavaScriptの基礎を学ぶ',
      description: 'このコースではJavaScriptの基本文法と概念を学びます。',
      targetAudience: '初心者',
      level: '初級',
      difficulty: 1,
      durationMin: 120,
      categoryId: 'programming',
      tagIds: ['tag1', 'tag4'],
    },
    {
      id: 'course2',
      title: 'Pythonでデータ分析',
      summary: 'Pythonを使ったデータ分析の手法',
      description:
        'Pythonを用いてデータの前処理、分析、可視化を実践的に学びます。',
      targetAudience: '中級者',
      level: '中級',
      difficulty: 2,
      durationMin: 180,
      categoryId: 'programming',
      tagIds: ['tag3', 'tag5'],
    },
    {
      id: 'course3',
      title: '最新生成AI入門',
      summary: '生成AIの基本を学ぶ',
      description: '生成AIの仕組みと活用方法について、実例を交えて解説します。',
      targetAudience: '初心者',
      level: '初級',
      difficulty: 1,
      durationMin: 150,
      categoryId: 'ai',
      tagIds: ['tag1', 'tag4'],
    },
    {
      id: 'course4',
      title: '生成AI応用技術',
      summary: '生成AIを用いた応用技術の実践',
      description:
        '高度な生成AI技術を用いて、実際のプロジェクトにどう活かすかを学びます。',
      targetAudience: '上級者',
      level: '上級',
      difficulty: 3,
      durationMin: 200,
      categoryId: 'ai',
      tagIds: ['tag2', 'tag5'],
    },
    {
      id: 'course5',
      title: 'Reactで作るモダンWebアプリ',
      summary: 'Reactを使ったWeb開発の実践',
      description:
        'ReactとNext.jsを用いたWebアプリケーション開発の流れを学びます。',
      targetAudience: '中級者',
      level: '中級',
      difficulty: 2,
      durationMin: 180,
      categoryId: 'web-development',
      tagIds: ['tag3', 'tag4'],
    },
    {
      id: 'course6',
      title: 'FullStack開発の基礎',
      summary: 'バックエンドとフロントエンドの統合',
      description:
        'サーバーサイドとクライアントサイドの連携方法を基礎から学びます。',
      targetAudience: '初心者',
      level: '初級',
      difficulty: 1,
      durationMin: 160,
      categoryId: 'web-development',
      tagIds: ['tag1', 'tag3'],
    },
  ];

  for (const course of coursesData) {
    // コース作成（タグとのリレーションも同時に接続）
    const createdCourse = await prisma.masterCourse.create({
      data: {
        id: course.id,
        title: course.title,
        summary: course.summary,
        description: course.description,
        targetAudience: course.targetAudience,
        level: course.level,
        difficulty: course.difficulty,
        durationMin: course.durationMin,
        categoryId: course.categoryId,
        tags: {
          connect: course.tagIds.map((tagId) => ({ id: tagId })),
        },
      },
    });

    // 各コースに対して3件のコース記事を作成
    for (let i = 1; i <= 3; i++) {
      const articleId = `${course.id}-article${i}`;
      const createdArticle = await prisma.masterCourseArticle.create({
        data: {
          id: articleId,
          courseId: createdCourse.id,
          sequence: i,
          title: `${course.title} - パート${i}`,
          content: `これは${course.title}のパート${i}の内容です。詳細な説明と例が含まれています。`,
          durationMin: 30,
        },
      });

      // 各記事に1件の演習問題を作成
      await prisma.masterCourseArticleExercise.create({
        data: {
          id: `${articleId}-exercise1`,
          courseArticleId: createdArticle.id,
          exerciseType: 'SELECTION',
          question: `【${course.title} パート${i}】サンプル問題：正しい選択肢はどれですか？`,
          options: JSON.stringify(['選択肢1', '選択肢2', '選択肢3']),
          correctAnswer: '選択肢2',
        },
      });

      // 各記事に1件のFAQを作成
      await prisma.masterCourseArticleFAQ.create({
        data: {
          id: `${articleId}-faq1`,
          courseArticleId: createdArticle.id,
          question: `【FAQ】${course.title} パート${i}に関するよくある質問`,
          answer: 'こちらはFAQの回答例です。',
        },
      });
    }
  }

  // ─── MasterExamと試験問題のシード ─────────────────────────────
  const examsData = [
    {
      id: 'exam1',
      title: 'プログラミング基礎試験',
      description: 'プログラミングの基本知識を問う試験です。',
      level: 1,
      timeLimitMin: 60,
      categoryId: 'programming',
      passingScore: 60,
      questions: [
        {
          id: 'exam1-q1',
          sequence: 1,
          score: 20,
          question: 'JavaScriptとは何ですか？',
          questionType: '選択肢式',
          options: JSON.stringify([
            'プログラミング言語',
            'マークアップ言語',
            'スタイルシート',
          ]),
          correctAnswer: 'プログラミング言語',
        },
        {
          id: 'exam1-q2',
          sequence: 2,
          score: 20,
          question: 'Pythonの特徴はどれですか？',
          questionType: '選択肢式',
          options: JSON.stringify([
            '動的型付け',
            '静的型付け',
            'コンパイル言語',
          ]),
          correctAnswer: '動的型付け',
        },
        {
          id: 'exam1-q3',
          sequence: 3,
          score: 20,
          question: '変数とは何ですか？',
          questionType: '選択肢式',
          options: JSON.stringify([
            '値を保持するための名前',
            '関数の一部',
            'データベースのテーブル',
          ]),
          correctAnswer: '値を保持するための名前',
        },
      ],
    },
    {
      id: 'exam2',
      title: '生成AI基礎試験',
      description: '生成AIの基本概念を理解するための試験です。',
      level: 1,
      timeLimitMin: 45,
      categoryId: 'ai',
      passingScore: 70,
      questions: [
        {
          id: 'exam2-q1',
          sequence: 1,
          score: 20,
          question: '生成AIとは何ですか？',
          questionType: '選択肢式',
          options: JSON.stringify([
            '人工知能',
            'ルールベースのシステム',
            '機械学習の一分野',
          ]),
          correctAnswer: '機械学習の一分野',
        },
        {
          id: 'exam2-q2',
          sequence: 2,
          score: 20,
          question: '代表的な生成AIモデルはどれですか？',
          questionType: '選択肢式',
          options: JSON.stringify(['GPT', 'CNN', 'RNN']),
          correctAnswer: 'GPT',
        },
        {
          id: 'exam2-q3',
          sequence: 3,
          score: 20,
          question: '生成AIの用途として適切なのはどれですか？',
          questionType: '選択肢式',
          options: JSON.stringify(['文章生成', '画像認識', 'データベース設計']),
          correctAnswer: '文章生成',
        },
      ],
    },
    {
      id: 'exam3',
      title: 'Web開発基礎試験',
      description: 'Web開発の基礎知識を問う試験です。',
      level: 1,
      timeLimitMin: 50,
      categoryId: 'web-development',
      passingScore: 65,
      questions: [
        {
          id: 'exam3-q1',
          sequence: 1,
          score: 20,
          question: 'HTTPの略は何ですか？',
          questionType: '選択肢式',
          options: JSON.stringify([
            'HyperText Transfer Protocol',
            'Hyperlink Transfer Protocol',
            'HighText Transfer Protocol',
          ]),
          correctAnswer: 'HyperText Transfer Protocol',
        },
        {
          id: 'exam3-q2',
          sequence: 2,
          score: 20,
          question: 'REST APIの特徴はどれですか？',
          questionType: '選択肢式',
          options: JSON.stringify([
            'ステートレス',
            '状態管理が必要',
            'セッションベース',
          ]),
          correctAnswer: 'ステートレス',
        },
        {
          id: 'exam3-q3',
          sequence: 3,
          score: 20,
          question: 'フロントエンドとは何ですか？',
          questionType: '選択肢式',
          options: JSON.stringify([
            'ユーザーが直接触れる部分',
            'サーバー側の処理',
            'データベース',
          ]),
          correctAnswer: 'ユーザーが直接触れる部分',
        },
      ],
    },
  ];

  for (const exam of examsData) {
    const createdExam = await prisma.masterExam.create({
      data: {
        id: exam.id,
        title: exam.title,
        description: exam.description,
        level: exam.level,
        timeLimitMin: exam.timeLimitMin,
        categoryId: exam.categoryId,
        passingScore: exam.passingScore,
      },
    });

    // 試験問題の作成
    for (const q of exam.questions) {
      await prisma.masterExamQuestion.create({
        data: {
          id: q.id,
          examId: createdExam.id,
          sequence: q.sequence,
          score: q.score,
          question: q.question,
          questionType: q.questionType,
          options: q.options,
          correctAnswer: q.correctAnswer,
        },
      });
    }
  }

  // ─── サンプルユーザーのシード ─────────────────────────────
  const usersData = [
    {
      id: 'user1',
      displayId: 'user_one',
      firebaseUserId: 'firebase_user_one',
      stripeUserId: null,
      name: '太郎',
      occupation: 'エンジニア',
      birthDate: '1990-01-01',
    },
    {
      id: 'user2',
      displayId: 'user_two',
      firebaseUserId: 'firebase_user_two',
      stripeUserId: null,
      name: '花子',
      occupation: 'デザイナー',
      birthDate: '1992-05-12',
    },
  ];

  for (const user of usersData) {
    await prisma.user.create({
      data: user,
    });
  }

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
