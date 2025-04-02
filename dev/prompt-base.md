## 指示
あなたは超優秀なエンジニアです。OpenLearn JPというプロダクトのソースコード等の解説を行います。
経験が浅いエンジニア（ユーザー）からの質問が提出されるので、それに答えてください。
その際、あとにたくさん追記している参考情報を参考にしてください。
ソースコードを出力するときは、基本的に変更箇所だけでなくコード全体を出力してください。
また既存のコードはコメントなどを含め必要箇所以外は変更しないでください。
APIのインターフェースは、下記のapi.ts内の型にしてください(つまり、必要に応じて、api.tsから型やinterfaceをimportして使ってください)。
もし、それだとUIページなどの既存の実装と整合性が取れにくい場合は、既存のUIを変更してください。


## ユーザーからの質問
下記のユーザープロフィール更新関係のファイルで、displayIdが使用済みであった場合に、エラーコードDISPLAY_ID_ALREADY_USED
を返し、画面にもその旨を表示してください。
```
'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAuth } from '@/contexts/auth-context';
import { apiFetch } from '@/lib/apiClient';
import type { User as ApiUser } from '@/types/api';

export default function SettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [occupation, setOccupation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // プロフィール情報の取得
  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await apiFetch<ApiUser>(
          '/api/v1/mypage/profile',
          { cache: 'no-store' },
          true
        );
        setUsername(data.name);
        setUserId(data.displayId);
        setOccupation(data.occupation);
      } catch (err) {
        console.error('プロフィール取得エラー:', err);
        setError('プロフィール情報の取得に失敗しました。');
      }
    }
    fetchProfile();
  }, []);

  // プロフィール更新処理（PUTリクエスト）
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const payload = {
        name: username,
        occupation: occupation,
        displayId: userId,
      };
      await apiFetch<ApiUser>(
        '/api/v1/mypage/profile',
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        },
        true
      );

      setSuccess('プロフィール情報が正常に更新されました。');
    } catch (err) {
      setError('プロフィールの更新に失敗しました。もう一度お試しください。');
      console.error('Error updating profile:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link
          href='/mypage'
          className='text-orange-500 hover:underline mb-4 inline-flex items-center'
        >
          <ArrowLeft className='mr-2 h-4 w-4' /> マイページに戻る
        </Link>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>
          アカウント設定
        </h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        <TabsList className='grid w-full grid-cols-2 mb-8'>
          <TabsTrigger value='account'>アカウント情報</TabsTrigger>
          {/* <TabsTrigger value='notifications'>通知設定</TabsTrigger> */}
        </TabsList>

        <TabsContent value='account'>
          <Card>
            <CardHeader>
              <CardTitle>アカウント情報</CardTitle>
              <CardDescription>プロフィール情報を変更します。</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className='space-y-6'>
                <div className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='username'>ユーザー名</Label>
                      <Input
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='userId'>ユーザーID</Label>
                      <Input
                        id='userId'
                        value={userId}
                        // disabled
                        // className='bg-gray-50'
                        onChange={(e) => setUserId(e.target.value)}
                      />
                      <p className='text-xs text-gray-500'></p>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='occupation'>職種</Label>
                    <Input
                      id='occupation'
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='email'>メールアドレス</Label>
                    <div className='flex items-center gap-4'>
                      <Input
                        id='email'
                        type='email'
                        value={user?.email || 'example@email.com'}
                        disabled
                        className='bg-gray-50 flex-1'
                      />
                      <Link href='/auth/change-email'>
                        <Button
                          variant='outline'
                          className='border-orange-500 text-orange-500 hover:bg-orange-50'
                        >
                          変更
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label>パスワード</Label>
                    <div className='flex items-center gap-4'>
                      <Input
                        type='password'
                        value='********'
                        disabled
                        className='bg-gray-50 flex-1'
                      />
                      <Button
                        variant='outline'
                        className='border-orange-500 text-orange-500 hover:bg-orange-50'
                      >
                        変更
                      </Button>
                    </div>
                  </div>
                </div>

                {error && (
                  <Alert variant='destructive'>
                    <AlertCircle className='h-4 w-4' />
                    <AlertTitle>エラー</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className='bg-green-50 border-green-200'>
                    <CheckCircle className='h-4 w-4 text-green-600' />
                    <AlertTitle className='text-green-600'>成功</AlertTitle>
                    <AlertDescription className='text-green-700'>
                      {success}
                    </AlertDescription>
                  </Alert>
                )}

                <Button
                  type='submit'
                  className='bg-orange-500 hover:bg-orange-600'
                  disabled={isLoading}
                >
                  {isLoading ? '保存中...' : '変更を保存'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

```

```
// app/api/v1/mypage/profile/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { User as ApiUser } from '@/types/api';
import { authenticate } from '@/lib/apiHandler';

export async function GET(request: Request) {
  try {
    const decodedToken = await authenticate(request);
    const userId = decodedToken.uid;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    const apiUser: ApiUser = {
      id: user.id,
      displayId: user.displayId,
      name: user.name || '',
      occupation: user.occupation || '',
      birthDate: user.birthDate || '',
      joinedDate: user.createdAt.toISOString(),
    };
    return NextResponse.json(apiUser);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const decodedToken = await authenticate(request);
    const userId = decodedToken.uid;
    const body = await request.json();
    const { name, occupation, displayId } = body;

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        occupation,
        displayId,
      },
    });

    const responseUser = {
      id: user.id,
      displayId: user.displayId,
      name: user.name || '',
      occupation: user.occupation || '',
      birthDate: user.birthDate || '',
      joinedDate: user.createdAt.toISOString(),
    };

    return NextResponse.json(responseUser);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

```


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

model MasterCourseArticleReference {
  id                  String   @id
  url                 String
  title               String
  description         String //基本的にリンクのアンカーテキストになる短文
  detailedDescription String? // embedding対象となる説明文
  createdAt           DateTime @default(now())
}

model MasterCourseArticleMasterCourseArticleReferenceRelation {
  id                    String   @id
  masterCourseArticleId String
  referenceId           String
  createdAt             DateTime @default(now())
  score                 Float // 基本的にコース概要のembeddingsのcos類似度を保存することを想定
}

// コース内の演習問題（記事末尾の練習問題）
model MasterCourseArticleExercise {
  id              String              @id
  courseArticleId String
  courseArticle   MasterCourseArticle @relation(fields: [courseArticleId], references: [id], onDelete: Cascade)

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
  user            User                @relation(fields: [userId], references: [id], onDelete: Cascade)
  courseArticleId String
  courseArticle   MasterCourseArticle @relation(fields: [courseArticleId], references: [id])
  createdAt       DateTime            @default(now())
  chatMessage     ChatMessage[]

  @@index([courseArticleId])
}

model ChatMessage {
  id String @id

  chatRoomId String
  chatRoom   ChatRoom @relation(fields: [chatRoomId], references: [id], onDelete: Cascade)
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
  courseArticle   MasterCourseArticle @relation(fields: [courseArticleId], references: [id], onDelete: Cascade)

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
  exam          MasterExam @relation(fields: [examId], references: [id], onDelete: Cascade)
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
