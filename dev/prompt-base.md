## 指示
あなたは超優秀なエンジニアです。OpenLearn JPというプロダクトのソースコード等の解説を行います。
経験が浅いエンジニア（ユーザー）からの質問が提出されるので、それに答えてください。
その際、あとにたくさん追記している参考情報を参考にしてください。
ソースコードを出力するときは、基本的に変更箇所だけでなくコード全体を出力してください。
また既存のコードはコメントなどを含め必要箇所以外は変更しないでください。
APIのインターフェースは、下記のapi.ts内の型にしてください(つまり、必要に応じて、api.tsから型やinterfaceをimportして使ってください)。
もし、それだとUIページなどの既存の実装と整合性が取れにくい場合は、既存のUIを変更してください。


## ユーザーからの質問
下記のページでモックデータを使っているところを差し替えて、APIから取得するようにしてください。その際、必要とされているAPIを全て作成してください。

※パーセンタイル計算はExamSubmissionのうち、同一examIdを持つ提出結果内の比較になります。
※必要であれば、apiの型定義ファイルに追記しても構いません。
※クライアント側で既存の実装でidがnumberになっているなどは、適宜stringに改修して構いません。

### app/exams/[id]/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArrowLeft, Clock, Trophy } from 'lucide-react';
import SocialShareButtons from '@/components/social-share-buttons';

interface ExamParams {
  params: {
    id: string;
  };
}

export default function ExamPage({ params }: ExamParams) {
  const examId = params.id;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  // 実際のアプリケーションではAPIからデータを取得します
  const exam = {
    id: examId,
    title: examId === 'ai-basics' ? '生成AI基礎試験' : '試験タイトル',
    description:
      '生成AIの基礎知識を測定する試験です。ChatGPT、Stable Diffusion、AIの歴史などについての問題が出題されます。',
    category: 'ai',
    categoryName: '生成AI',
    level: '初級',
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: '生成AIの主な種類として正しくないものはどれですか？',
        options: ['テキスト生成AI', '画像生成AI', '音楽生成AI', '物理演算AI'],
        correctAnswer: '物理演算AI',
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'ChatGPTの開発元として正しいのはどれですか？',
        options: ['Google', 'OpenAI', 'Microsoft', 'Meta'],
        correctAnswer: 'OpenAI',
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: 'Transformerアーキテクチャが発表されたのは何年ですか？',
        options: ['2015年', '2017年', '2019年', '2021年'],
        correctAnswer: '2017年',
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: '生成AIのトレーニングに使用される主な手法はどれですか？',
        options: ['教師あり学習', '強化学習', '教師なし学習', '以上すべて'],
        correctAnswer: '以上すべて',
      },
      {
        id: 5,
        type: 'free-text',
        question:
          '生成AIの倫理的課題について、あなたの考えを100字以内で述べてください。',
        correctAnswer: '',
      },
    ],
    timeLimit: '30分',
    passingScore: 70,
  };

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);

    // Calculate score
    let correctAnswers = 0;
    exam.questions.forEach((question, index) => {
      if (
        question.type === 'multiple-choice' &&
        answers[index] === question.correctAnswer
      ) {
        correctAnswers++;
      } else if (question.type === 'free-text') {
        // For free-text questions, we'll give a point if they answered something
        if (answers[index] && answers[index].trim().length > 0) {
          correctAnswers++;
        }
      }
    });

    const score = Math.round((correctAnswers / exam.questions.length) * 100);

    setShowResults(true);
  };

  const currentQuestion = exam.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / exam.questions.length) * 100;

  // Calculate score for results
  const calculateScore = () => {
    let correctAnswers = 0;
    exam.questions.forEach((question, index) => {
      if (
        question.type === 'multiple-choice' &&
        answers[index] === question.correctAnswer
      ) {
        correctAnswers++;
      } else if (question.type === 'free-text') {
        // For free-text questions, we'll give a point if they answered something
        if (answers[index] && answers[index].trim().length > 0) {
          correctAnswers++;
        }
      }
    });

    return Math.round((correctAnswers / exam.questions.length) * 100);
  };

  const score = calculateScore();
  const isPassed = score >= exam.passingScore;

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link
          href='/exams'
          className='text-orange-500 hover:underline mb-4 inline-block'
        >
          <ArrowLeft className='inline mr-2 h-4 w-4' /> 試験一覧に戻る
        </Link>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>{exam.title}</h1>
        <p className='text-gray-600 mb-4'>{exam.description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          <span className='bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm'>
            {exam.categoryName}
          </span>
          <span className='bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm'>
            {exam.level}
          </span>
          <span className='bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm flex items-center'>
            <Clock className='mr-1 h-4 w-4' /> {exam.timeLimit}
          </span>
        </div>
      </div>

      {/* Exam Progress */}
      <div className='mb-6'>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-gray-600'>
            問題 {currentQuestionIndex + 1} / {exam.questions.length}
          </span>
          <span className='text-gray-600'>進捗: {Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className='h-2' />
      </div>

      {/* Question Card */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-xl text-gray-800'>
            問題 {currentQuestionIndex + 1}: {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentQuestion.type === 'multiple-choice' ? (
            <RadioGroup
              value={answers[currentQuestionIndex] || ''}
              onValueChange={(value) =>
                handleAnswerChange(currentQuestionIndex, value)
              }
            >
              {currentQuestion.options?.map((option, index) => (
                <div key={index} className='flex items-center space-x-2 mb-4'>
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className='text-base'>
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          ) : (
            <div>
              <Textarea
                placeholder='回答を入力してください...'
                className='min-h-32'
                value={answers[currentQuestionIndex] || ''}
                onChange={(e) =>
                  handleAnswerChange(currentQuestionIndex, e.target.value)
                }
              />
              <p className='text-gray-500 text-sm mt-2'>
                100字以内で回答してください。
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className='flex justify-between mb-8'>
        <Button
          variant='outline'
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
          className='border-orange-500 text-orange-500 hover:bg-orange-50'
        >
          前の問題
        </Button>

        {currentQuestionIndex < exam.questions.length - 1 ? (
          <Button
            onClick={handleNextQuestion}
            className='bg-orange-500 hover:bg-orange-600 text-white'
          >
            次の問題
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitted}
            className='bg-orange-500 hover:bg-orange-600 text-white'
          >
            提出する
          </Button>
        )}
      </div>

      {/* Results Dialog */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle className='text-center text-2xl'>
              {isPassed ? (
                <span className='text-green-600'>
                  合格おめでとうございます！
                </span>
              ) : (
                <span className='text-red-600'>残念ながら不合格です</span>
              )}
            </DialogTitle>
            <DialogDescription className='text-center'>
              <div className='my-6 flex justify-center'>
                {isPassed ? (
                  <Trophy className='h-16 w-16 text-yellow-500' />
                ) : (
                  <div className='h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>
                    <span className='text-red-600 text-2xl'>!</span>
                  </div>
                )}
              </div>
              <p className='text-xl mb-2'>
                あなたのスコア: <span className='font-bold'>{score}%</span>
              </p>
              <p className='mb-4'>合格ライン: {exam.passingScore}%</p>
              <p className='text-sm text-gray-600 mb-4'>
                あなたは上位30%のパフォーマンスを達成しました！
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='flex-col sm:flex-col gap-2'>
            <SocialShareButtons
              title={`OpenLearn JPの${exam.title}で${score}%のスコアを獲得しました！`}
              className='mb-4 justify-center'
            />
            <div className='flex gap-2 w-full'>
              <Button
                variant='outline'
                className='flex-1 border-orange-500 text-orange-500 hover:bg-orange-50'
                onClick={() => {
                  setShowResults(false);
                  setIsSubmitted(false);
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                }}
              >
                もう一度挑戦
              </Button>
              <Link href='/exams' className='flex-1'>
                <Button className='w-full bg-orange-500 hover:bg-orange-600 text-white'>
                  他の試験を見る
                </Button>
              </Link>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

## プロダクト(OpenLearn)について
解説対象のOpenLearnについての情報は下記です。

### 要件
生成AIやプログラミングについての学習コースを提供します。

## UIの概要
オレンジと白を基調としたシンプルかつリラックスできる雰囲気。
ヘッダーにログインorサインアップの導線あり。

### Topページ
各大ジャンル毎に代表的なコースが一覧表示されている。
また、試験ページへの導線もある

### コース一覧ページ
各コースが一覧表示されている。
検索による絞り込みも可能。
それぞれの内容や対象者、難易度などが分かるようになっている。

### コース概要ページ
対象者や難易度、このコースで学べる内容の要約のボックスが先頭にある。
その下に後続のコースページへの一覧（リンク）コーナーがある。
さらに全体的な概要を説明する記事部分が続く。
ページ下部の方に、最初のコース内容ページへの導線がある。
さらにその下には、関連するコース一覧のリンクカードがある。

### コース内容ページ：Article(旧lesson)
基本はブログ記事形式だが、最後に練習問題がある。
その下に次のコースへの動線がある。
さらにその下に、外部リンクを含めた参考リンクカードがいくつか表示される。
そして、「AIに質問する」ためのチャットコーナーもある。ページ下部にチャットコーナーが配置されている。
コース概要もコース内容もマークダウン形式の記事データを洗練されたデザインで表示できる。

### 試験一覧ページ
ジャンル毎の試験がページへの導線が表示されている。

### 試験ページ
問題が複数個ならび、回答していき最後に「提出する」ボタンを押すとその場で結果が表示される。
問題は基本ラジオボタン式。
※自由記述形式の問題も一部ありです。
提出すると、結果と他の受験者に対して上位何％のパフォーマンスだったかが表示される。

## 備考
コース機能について
    - 基本はブログ記事式(シェアボタンあり)
    - 各記事が連番になっており、一つのコースを形成
    - AIに質問可能
    - 多かった質問とその回答表示
    - コースにはジャンルやタグがある
        - 大ジャンル：プログラミング
        - 中：python
        - 小：ライブラリ
        - タグ：自由に
        
    - 関連コース表示

## 技術面について
### フレームワーク
FE, BEともにApp routerのNextjs(typescript)で作成されています。
認証はfirebaseを使っています。
ORMはprismaを使っています。

### APIについて
APIは/api/v1以下に作っていってます。

## 主要なファイル
### prisma/schema.prisma
```
generator client {
  provider = "prisma-client-js"
  output   = "../lib/__generated__/prisma"
}

datasource db {
  provider = "postgresql" // ご利用のDBに合わせて変更
  url      = env("DATABASE_URL")
}

// 方針：ENUM型は、DBスキーマでは使わず、必要な場合はアプリケーション側で定義する

model User {
  id             String    @id // firebaseUserIdと同じにする
  displayId      String    @unique
  firebaseUserId String    @unique
  stripeUserId   String?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  plan           String    @default("FREE") // プラン名（例：FREE, PRO,）
  name           String?
  occupation     String?
  birthDate      String?
  deletedAt      DateTime? // 論理削除用
  deleteReason   String? // 論理削除理由

  // リレーション
  examSubmissions ExamSubmission[]
  chatMessages    ChatMessage[]
  chatRoom        ChatRoom[]
}

// 「プログラミング」「生成AI」「Web開発」など
model MasterCategory {
  id          String @id
  name        String
  description String

  // 関連するコースや試験
  courses MasterCourse[]
  exams   MasterExam[]
}

model MasterTag {
  id   String @id
  name String @unique

  // Many-to-many: Course ↔ Tag
  courses MasterCourse[] @relation("CourseTags")
}

// courseの概要などを管理するテーブル。コレ自体で一つのページにもなる
model MasterCourse {
  id             String   @id
  title          String? // 初期はテーブルでなく、ファイルで管理するのでnull可
  summary        String?
  description    String?
  targetAudience String?
  level          String
  difficulty     Int?
  durationMin    Int? // コースの所要時間（分）
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  // カテゴリー（例：大・中・小の階層はCategoryテーブルの親子関係で管理）
  categoryId String
  category   MasterCategory @relation(fields: [categoryId], references: [id])

  // Many-to-many: Course ↔ Tag
  tags MasterTag[] @relation("CourseTags")

  // コースを構成するコンテンツ（各記事）
  courseArticles MasterCourseArticle[]
}

// コース同士の関連を管理するテーブル
// 毎回全更新する関係もあり、prismaの暗黙的なテーブルでなく明示的に管理する
model MasterCourseRelation {
  id              String @id
  courseId        String
  relatedCourseId String

  score Float // 基本的にコース概要のembeddingsのcos類似度を保存することを想定

  @@index([courseId])
  @@index([relatedCourseId])
}

// 例：コースの具体的な内容（記事）を管理するテーブル
model MasterCourseArticle {
  id       String       @id
  courseId String
  course   MasterCourse @relation(fields: [courseId], references: [id])

  sequence    Int // コース内での連番
  title       String? // 初期はテーブルでなく、ファイルで管理するのでnull可
  content     String? // 記事本文（ブログ記事形式） 初期はテーブルでなく、ファイルで管理するのでnull可
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  durationMin Int? // 記事の所要時間（分）

  // 演習問題（記事末尾の練習問題）
  exercises MasterCourseArticleExercise[]

  // チャット（「AIに質問する」用）
  chatRoom ChatRoom[]
  faq      MasterCourseArticleFAQ[]
}

// コース内の演習問題（記事末尾の練習問題）
model MasterCourseArticleExercise {
  id              String              @id
  courseArticleId String
  courseArticle   MasterCourseArticle @relation(fields: [courseArticleId], references: [id])

  exerciseType  String // SELECTION or TEXT, 自由記述か選択肢式か
  question      String
  // 複数選択式の場合、optionsをJSON文字列などで保存（例："[\"選択肢1\", \"選択肢2\", ...]"）
  options       String?
  correctAnswer String? // 自由記述の場合はnull可

  createdAt DateTime @default(now())
}

// course内でユーザーとAIのチャットを行うためのテーブル
model ChatRoom {
  id              String              @id
  userId          String
  user            User                @relation(fields: [userId], references: [id])
  courseArticleId String
  courseArticle   MasterCourseArticle @relation(fields: [courseArticleId], references: [id])
  createdAt       DateTime            @default(now())
  chatMessage     ChatMessage[]

  @@index([courseArticleId])
}

model ChatMessage {
  id String @id

  chatRoomId String
  chatRoom   ChatRoom @relation(fields: [chatRoomId], references: [id])
  // チャット発言者。未ログインの場合も想定できるため、userはオプショナル
  userId     String? // AIの場合はnull
  user       User?    @relation(fields: [userId], references: [id])

  role                  String // 発言者の役割（例：USER or AI）
  message               String
  createdAt             DateTime @default(now())
  masterCourseArticleId String?

  @@index([chatRoomId, createdAt], name: "idx_chatroom_createdAt")
}

model MasterCourseArticleFAQ {
  id              String              @id
  courseArticleId String
  courseArticle   MasterCourseArticle @relation(fields: [courseArticleId], references: [id])

  question  String
  answer    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([courseArticleId])
}

model MasterExam {
  id           String         @id
  title        String
  description  String
  createdAt    DateTime       @default(now())
  updatedAt    DateTime       @updatedAt
  level        Int // 試験のレベル（例：1, 2, 3）
  timeLimitMin Int // 試験の制限時間（分）
  // 試験もジャンル（カテゴリー）で分類。※各試験は大・中・小のうちいずれかのカテゴリーに所属する
  categoryId   String
  category     MasterCategory @relation(fields: [categoryId], references: [id])
  passingScore Int

  examQuestions  MasterExamQuestion[]
  ExamSubmission ExamSubmission[]
}

model MasterExamQuestion {
  id            String     @id
  examId        String
  exam          MasterExam @relation(fields: [examId], references: [id])
  sequence      Int // 問題の順番（試験内での連番）
  score         Int // 問題の配点
  question      String
  questionType  String // 問題の種類（例：選択肢式、自由記述式）
  // ラジオボタン式の場合、optionsはJSON形式の文字列で保存（例："[\"選択肢1\", \"選択肢2\"]"）
  options       String?
  correctAnswer String? // 自由記述はnull可

  createdAt  DateTime     @default(now())
  ExamAnswer ExamAnswer[]

  @@index([examId])
}

model ExamSubmission {
  id     String     @id
  examId String
  exam   MasterExam @relation(fields: [examId], references: [id])

  userId String
  user   User   @relation(fields: [userId], references: [id])

  submittedAt DateTime @default(now())
  score       Int
  percentile  Float

  examAnswers ExamAnswer[]

  @@index([userId])
  @@index([examId])
}

model ExamAnswer {
  id               String         @id
  examSubmissionId String
  examSubmission   ExamSubmission @relation(fields: [examSubmissionId], references: [id])

  examQuestionId String
  examQuestion   MasterExamQuestion @relation(fields: [examQuestionId], references: [id])

  answer    String
  isCorrect Boolean

  @@index([examSubmissionId])
}

```

### types/api.ts
```
// types/api.ts
// APIの返却・受領値の型定義

// コース関連
export interface CategoryWithRepresentativeCourse {
  categoryId: string;
  title: string;
  description: string;
  courses: {
    id: string;
    title: string;
    level: string;
    duration: string;
  }[];
}

export interface User {
  id: string;
  displayId: string;
  name: string;
  occupation: string;
  birthDate: string;
  joinedDate: string;
}

export interface OkResponse {
  ok: boolean;
}

export interface ExamResult {
  subMissionId: string;
  examId: string;
  examTitle: string;
  score: number;
  passingScore: number;
  examCategoryName: string;
  examLevel: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

// 試験関連
export interface ExamOutline {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  categoryName: string;
  level: string;
  questions: number;
  time: string;
}
export interface ExamsResponse {
  exams: ExamOutline[];
  totalExams: number;
  totalPages: number; //イチページに10 exam を表示する想定
}

export interface ExamQuestion {
  id: string;
  sequence: number;
  questionType: 'SELECTION' | 'TEXT';
  question: string;
  options?: string[];
  // correctAnswer: string; // これはサーバー側で計算するので、クライアント側では必要ない
}

export interface ExamDetail {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  categoryName: string;
  level: string;
  questions: ExamQuestion[];
  timeLimitMin: number;
  passingScore: number;
}

export interface ExamSubmission {
  examId: string;
  MapQuestionIdToAnswer: Record<string, string>;
}

export interface ExamResult {
  score: number;
  correctAnswers: number; //正解数
  totalQuestions: number;
  passed: boolean;
  passingScore: number;
  percentile: number;
  MapQuestionIdToCorrectAnswerValue: Record<string, string>;
}

export interface Course {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: string;
  categoryName: string;
  level: string;
  durationMin: number;
  articleCount: number;
}

export interface CoursesResponse {
  courses: Course[];
  totalCourses: number;
  totalPages: number;
}

export interface CourseDetail {
  id: string;
  title: string;
  summary: string;
  description: string;
  categoryId: string;
  categoryName: string;
  level: string;
  durationMin: number;
  targetAudience: string;
  prerequisites: string;
  articleSummaries: CourseArticleSummary[];
}
export interface CourseArticleSummary {
  id: string;
  sequence: number;
  title: string;
  durationMin: number;
}
export interface RelatedCoursesResponse {
  courses: RelatedCourse[];
}

export interface RelatedCourse {
  id: string;
  title: string;
  level: string;
  durationMin: number;
}
// レッスン(=Article)関連
export interface CourseArticleDetail {
  id: string;
  title: string;
  content: string;
  courseId: string;
  courseTitle: string;
  durationMin: number;
}

export interface CourseArticleNavigationResponse {
  currentCourseArticle: CourseArticleSummary;
  prevCourseArticle: CourseArticleSummary | null;
  nextCourseArticle: CourseArticleSummary | null;
  currentCourseArticleIndex: number;
  totalCourseArticles: number;
}

export interface ArticleExercise {
  id: string;
  type: 'multiple-choice' | 'free-text';
  question: string;
  options?: string[];
  correctAnswer: string;
}

export interface ExerciseQuestionsResponse {
  questions: ArticleExercise[];
}

export interface Reference {
  title: string;
  url: string;
  description: string;
}

export interface ReferencesResponse {
  references: Reference[];
}

export interface AIChatRequest {
  message: string;
  articleTitle: string;
  history: { role: 'user' | 'assistant'; content: string }[];
}

export interface DeleteAccountRequest {
  reason: string;
  confirmation: string;
}

export interface AIChatResponse {
  message: string;
  timestamp: string;
}

export interface UserExamResult {
  subMissionId: string;
  examId: string;
  examTitle: string;
  date: string;
  score: number;
  passingScore: number;
  examCategoryName: string;
  examLevel: string;
}

```

重要：APIのリクエスト・レスポンスはプリミティブ型か↑のファイルにある型を必ず使用して行ってください。
機能的に上記の型だけではデータを上手く表現出来ない場合は、上記ファイルに使用したい型を追記してください。

### contexts/auth-context.tsx
```
'use client';

import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '@/lib/firebase';
import { useRouter } from 'next/navigation'; // ルーターのインポート

interface AuthContextType {
  user: User | null;
  reloadUser: () => Promise<void>;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<User>;
  signIn: (email: string, password: string) => Promise<User>;
  signInWithGoogle: () => Promise<User>;
  signInWithGithub: () => Promise<User>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // ルーターを初期化

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  };

  const signIn = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  };

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  };

  const signInWithGithub = async () => {
    const result = await signInWithPopup(auth, githubProvider);
    return result.user;
  };

  const logout = async () => {
    await signOut(auth);
    router.push('/'); // ログアウト後にトップページへリダイレクト
  };

  const reloadUser = async () => {
    if (user) {
      await user.reload();
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
      }
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    logout,
    reloadUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

```

### lib/apiClient.ts(APIへのリクエストをするときは基本このラッパーを使ってください)
```
// lib/apiClient.ts
import { auth } from './firebase';

/**
 * Firebase Authの現在のユーザーのIDトークンを取得する
 */
async function getIdToken(): Promise<string | null> {
  const user = auth.currentUser;
  return user ? await user.getIdToken() : null;
}

/**
 * URLのパーツを適切に連結する
 */
function joinURL(...parts: string[]): string {
  return parts
    .map((part, index) => {
      if (index === 0) {
        // 先頭は末尾のスラッシュを除去
        return part.replace(/\/+$/, '');
      }
      // 2番目以降は先頭と末尾のスラッシュを除去
      return part.replace(/^\/+|\/+$/g, '');
    })
    .join('/');
}

/**
 * APIリクエストを行うラッパー関数
 * @param endpoint - APIのエンドポイント（base URLは環境変数から取得）
 * @param options - fetchのオプション
 * @param requiresAuth - 認証トークンが必要な場合trueにする
 */
export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  requiresAuth: boolean = false
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    throw new Error('APIのBASE URLが設定されていません');
  }
  const url = joinURL(baseUrl, endpoint);

  const headers = new Headers(options.headers);
  if (requiresAuth) {
    const token = await getIdToken();
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
  }

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw new Error(`APIエラー: ${res.status}`);
  }
  return res.json();
}

```

### sample.env
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=
DATABASE_URL=
```
### app/page.tsx
```
// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, BookOpen, Code, Brain, Share2 } from 'lucide-react';
import { apiFetch } from '@/lib/apiClient';
import type { CategoryWithRepresentativeCourse } from '@/types/api';

interface Category {
  id: string;
  title: string;
  description: string;
  courses: {
    id: string;
    title: string;
    level: string;
    duration: string;
  }[];
}

export default async function Home() {
  // APIからトップページ用のカテゴリ＋代表コース情報を取得
  const data = await apiFetch<CategoryWithRepresentativeCourse[]>(
    `/api/v1/home`,
    {
      cache: 'default',
    }
  );

  const categories: Category[] = data.map((category) => ({
    id: category.categoryId,
    title: category.title,
    description: category.description,
    courses: category.courses.map((course) => ({
      id: course.id,
      title: course.title,
      level: course.level,
      duration: course.duration,
    })),
  }));

  // カテゴリIDに応じたアイコンのマッピング
  const iconMap: Record<string, JSX.Element> = {
    ai: <Brain className='h-8 w-8 text-orange-500' />,
    programming: <Code className='h-8 w-8 text-orange-500' />,
    'web-development': <BookOpen className='h-8 w-8 text-orange-500' />,
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 mb-12'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-orange-600 mb-4'>
            生成AIとプログラミングを学ぼう
          </h1>
          <p className='text-xl text-gray-700 mb-8'>
            OpenLearn
            JPは、最新の生成AIやプログラミングについての学習コースを提供するプラットフォームです。
            初心者から上級者まで、あなたのレベルに合わせた学習体験を提供します。
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link href='/courses'>
              <Button className='bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 px-8'>
                コースを探す
              </Button>
            </Link>
            <Link href='/exams'>
              <Button
                variant='outline'
                className='border-orange-500 text-orange-500 hover:bg-orange-50 text-lg py-6 px-8'
              >
                試験に挑戦する
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.map((category) => (
        <section key={category.id} className='mb-16'>
          <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center gap-3'>
              {iconMap[category.id] || (
                <BookOpen className='h-8 w-8 text-orange-500' />
              )}
              <h2 className='text-2xl font-bold text-gray-800'>
                {category.title}
              </h2>
            </div>
            <Link
              href={`/courses?category=${category.id}`}
              className='text-orange-500 hover:underline flex items-center'
            >
              すべて見る <ArrowRight className='ml-1 h-4 w-4' />
            </Link>
          </div>
          <p className='text-gray-600 mb-6'>{category.description}</p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {category.courses.map((course) => (
              <Card
                key={course.id}
                className='hover:shadow-md transition-shadow'
              >
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <CardTitle className='text-xl text-gray-800'>
                      {course.title}
                    </CardTitle>
                    <button className='text-gray-400 hover:text-orange-500'>
                      <Share2 className='h-5 w-5' />
                    </button>
                  </div>
                  <CardDescription className='flex gap-3 mt-2'>
                    <span className='bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs'>
                      {course.level}
                    </span>
                    <span className='bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs'>
                      {course.duration}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 line-clamp-3'>
                    {course.title}
                    に関する基礎から応用までを学べるコースです。実践的な例を通して理解を深めることができます。
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/courses/${course.id}`} className='w-full'>
                    <Button
                      variant='outline'
                      className='w-full border-orange-500 text-orange-500 hover:bg-orange-50'
                    >
                      コースを見る
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* Exams Section */}
      <section className='bg-orange-50 rounded-xl p-8 mb-12'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-orange-600 mb-4'>
            知識をテストしよう
          </h2>
          <p className='text-xl text-gray-700'>
            学んだ知識を試験で確認し、あなたのスキルレベルを証明しましょう。
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {categories.map((category) => (
            <Card
              key={category.id}
              className='hover:shadow-md transition-shadow'
            >
              <CardHeader>
                <div className='flex items-center gap-3'>
                  {iconMap[category.id] || (
                    <BookOpen className='h-8 w-8 text-orange-500' />
                  )}
                  <CardTitle>{category.title}試験</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>
                  {category.title}
                  の知識を確認するための試験です。合格すると認定証が発行されます。
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/exams?category=${category.id}`}
                  className='w-full'
                >
                  <Button className='w-full bg-orange-500 hover:bg-orange-600 text-white'>
                    試験に挑戦する
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

```

### app/api/v1/courses/[courseId]/articles/[articleId]/route.ts 
```
// app/api/v1/courses/[courseId]/articles/[articleId]/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { CourseArticleDetail } from '@/types/api';

export async function GET(
  request: Request,
  { params }: { params: { courseId: string; articleId: string } }
) {
  try {
    // courseIdとarticleIdで記事を検索し、リレーションでコース情報を取得
    const article = await prisma.masterCourseArticle.findFirst({
      where: {
        id: params.articleId,
        courseId: params.courseId,
      },
      include: {
        course: true,
      },
    });

    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    // APIの型に合わせて整形
    const result: CourseArticleDetail = {
      id: article.id,
      title: article.title || '',
      content: article.content || '',
      courseId: article.courseId,
      courseTitle: article.course?.title || '',
      durationMin: article.durationMin || 0,
    };

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

```
