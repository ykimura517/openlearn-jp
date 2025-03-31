// app/mypage/page.tsx
'use client';

import { useState, useEffect } from 'react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Trophy,
  BookOpen,
  Settings,
  LogOut,
  Calendar,
  Award,
} from 'lucide-react';
import { apiFetch } from '@/lib/apiClient';
import type { User, UserExamResult } from '@/types/api';
import { useRouter } from 'next/navigation';

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState<User | null>(null);
  const [examResults, setExamResults] = useState<UserExamResult[]>([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingExams, setLoadingExams] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await apiFetch<User>(
          '/api/v1/mypage/profile',
          { cache: 'no-store' },
          true
        );
        setUser(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoadingProfile(false);
      }
    }
    fetchProfile();
  }, []);

  useEffect(() => {
    async function fetchExamResults() {
      try {
        const data = await apiFetch<UserExamResult[]>(
          '/api/v1/mypage/exams',
          { cache: 'no-store' },
          true
        );
        setExamResults(data);
      } catch (error) {
        console.error('Error fetching exam results:', error);
      } finally {
        setLoadingExams(false);
      }
    }
    fetchExamResults();
  }, []);

  if (loadingProfile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Sidebar */}
        <div className='w-full md:w-64 space-y-6'>
          <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center'>
            <Avatar className='h-24 w-24 mx-auto mb-4'>
              <AvatarImage src='/placeholder.svg?height=96&width=96' />
              <AvatarFallback>{user?.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <h2 className='text-xl font-bold text-gray-800'>{user?.name}</h2>
            <p className='text-gray-600 text-sm mb-2'>@{user?.displayId}</p>
            <Badge
              variant='outline'
              className='bg-orange-100 text-orange-600 border-orange-200'
            >
              {user?.occupation}
            </Badge>
            <div className='mt-4 text-sm text-gray-500 flex items-center justify-center'>
              <Calendar className='h-4 w-4 mr-1' />
              {new Date(user?.joinedDate || '').toLocaleDateString('ja-JP')}
              に登録
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden'>
            <div className='p-4 border-b border-gray-100'>
              <h3 className='font-medium text-gray-800'>メニュー</h3>
            </div>
            <nav className='p-2'>
              <ul className='space-y-1'>
                <li>
                  <Link
                    href='/mypage'
                    className={`flex items-center px-3 py-2 rounded-md ${
                      activeTab === 'profile'
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <Award className='h-5 w-5 mr-3' />
                    プロフィール
                  </Link>
                </li>
                <li>
                  <Link
                    href='/mypage?tab=exams'
                    className={`flex items-center px-3 py-2 rounded-md ${
                      activeTab === 'exams'
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('exams')}
                  >
                    <Trophy className='h-5 w-5 mr-3' />
                    試験結果
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href='/mypage?tab=courses'
                    className={`flex items-center px-3 py-2 rounded-md ${
                      activeTab === 'courses'
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('courses')}
                  >
                    <BookOpen className='h-5 w-5 mr-3' />
                    コース進捗
                  </Link>
                </li> */}
                <li>
                  <Link
                    href='/mypage/settings'
                    className='flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100'
                  >
                    <Settings className='h-5 w-5 mr-3' />
                    設定
                  </Link>
                </li>
                <li>
                  <Link
                    href='/mypage/delete-account'
                    className='flex items-center px-3 py-2 rounded-md text-red-600 hover:bg-red-50'
                  >
                    <LogOut className='h-5 w-5 mr-3' />
                    退会
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className='flex-1'>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList className='grid w-full grid-cols-3 mb-8'>
              <TabsTrigger value='profile'>プロフィール</TabsTrigger>
              <TabsTrigger value='exams'>試験結果</TabsTrigger>
              {/* <TabsTrigger value='courses'>コース進捗</TabsTrigger> */}
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value='profile'>
              <Card>
                <CardHeader>
                  <CardTitle>プロフィール情報</CardTitle>
                  <CardDescription>
                    あなたのアカウント情報です。
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <h4 className='text-sm font-medium text-gray-500 mb-1'>
                        ユーザーID
                      </h4>
                      <p className='text-gray-800'>{user?.displayId}</p>
                    </div>
                    <div>
                      <h4 className='text-sm font-medium text-gray-500 mb-1'>
                        ユーザー名
                      </h4>
                      <p className='text-gray-800'>{user?.name}</p>
                    </div>
                    {/* メールアドレスは型に含まれていないため表示から除外 */}
                    <div>
                      <h4 className='text-sm font-medium text-gray-500 mb-1'>
                        職種
                      </h4>
                      <p className='text-gray-800'>{user?.occupation}</p>
                    </div>
                    <div>
                      <h4 className='text-sm font-medium text-gray-500 mb-1'>
                        生年月日
                      </h4>
                      <p className='text-gray-800'>
                        {new Date(user?.birthDate || '').toLocaleDateString(
                          'ja-JP'
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant='outline'
                    className='border-orange-500 text-orange-500 hover:bg-orange-50'
                  >
                    プロフィールを編集
                  </Button>
                </CardFooter>
              </Card>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>試験成績</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-2'>
                      <div className='flex justify-between'>
                        <span className='text-gray-600'>合格した試験</span>
                        <span className='font-medium'>
                          {
                            examResults.filter(
                              (exam) => exam.score >= exam.passingScore
                            ).length
                          }
                        </span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-gray-600'>平均スコア</span>
                        <span className='font-medium'>
                          {examResults.length > 0
                            ? Math.round(
                                examResults.reduce(
                                  (acc, exam) => acc + exam.score,
                                  0
                                ) / examResults.length
                              )
                            : 0}
                          %
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* コース進捗用のカードは現在対象外 */}
              </div>
            </TabsContent>

            {/* Exams Tab */}
            <TabsContent value='exams'>
              {loadingExams ? (
                <div>Loading exam results...</div>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>試験結果</CardTitle>
                    <CardDescription>
                      あなたが受験した試験の結果一覧です。
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-6'>
                      {examResults.map((exam) => {
                        const failed = exam.score < exam.passingScore;
                        return (
                          <div
                            key={exam.subMissionId}
                            className='border border-gray-200 rounded-lg p-4'
                          >
                            <div className='flex flex-col md:flex-row justify-between mb-2'>
                              <div>
                                <h3 className='text-lg font-medium text-gray-800'>
                                  {exam.examTitle}
                                </h3>
                                <div className='flex flex-wrap gap-2 mt-1'>
                                  <Badge
                                    variant='outline'
                                    className='bg-orange-100 text-orange-600 border-orange-200'
                                  >
                                    {exam.examCategoryName}
                                  </Badge>
                                  <Badge
                                    variant='outline'
                                    className='bg-orange-100 text-orange-600 border-orange-200'
                                  >
                                    {exam.examLevel}
                                  </Badge>
                                  <Badge
                                    variant='outline'
                                    className='bg-gray-100 text-gray-600 border-gray-200'
                                  >
                                    {new Date(exam.date).toLocaleDateString(
                                      'ja-JP'
                                    )}
                                  </Badge>
                                </div>
                              </div>
                              <div className='mt-2 md:mt-0 text-right'>
                                <div className='text-2xl font-bold flex items-center justify-end'>
                                  <span
                                    className={
                                      failed ? 'text-red-500' : 'text-green-500'
                                    }
                                  >
                                    {exam.score}%
                                  </span>
                                  {!failed && (
                                    <Trophy className='ml-2 h-5 w-5 text-yellow-500' />
                                  )}
                                </div>
                                <p className='text-sm text-gray-500'>
                                  合格ライン: {exam.passingScore}%
                                </p>
                              </div>
                            </div>
                            <div className='mt-2'>
                              <div className='flex justify-between text-sm mb-1'>
                                <span>スコア</span>
                                <span>{exam.score}%</span>
                              </div>
                              <Progress
                                value={exam.score}
                                className={`h-2 ${
                                  failed ? 'bg-red-100' : 'bg-green-100'
                                }`}
                                // indicatorClassName={
                                //   failed ? 'bg-red-500' : 'bg-green-500'
                                // }
                              />
                            </div>
                            <div className='mt-4 flex justify-end'>
                              {/* <Button
                                variant='outline'
                                size='sm'
                                className='text-sm border-orange-500 text-orange-500 hover:bg-orange-50'
                              >
                                詳細を見る
                              </Button> */}
                              {failed && (
                                <Button
                                  size='sm'
                                  className='ml-2 text-sm bg-orange-500 hover:bg-orange-600 text-white'
                                >
                                  再受験する
                                </Button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/exams`} className='w-full'>
                      <Button
                        className='bg-orange-500 hover:bg-orange-600 text-white'
                        onClick={() => router.push('/exams')}
                      >
                        新しい試験に挑戦する
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>

            {/* Courses Tab */}
            {/* <TabsContent value='courses'> */}
            {/* API でのコース進捗実装は現在準備中 */}
            {/* <div>コース進捗機能は現在準備中です。</div> */}
            {/* </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
