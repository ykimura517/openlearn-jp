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
import { auth } from '@/lib/firebase';

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
  // const data = await apiFetch<CategoryWithRepresentativeCourse[]>(
  //   `/api/v1/home`,
  //   {
  //     cache: 'default',
  //   }
  // );
  const user = auth.currentUser;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/home`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user ? `Bearer ${await user.getIdToken()}` : '',
      },
    }
  );
  let data: CategoryWithRepresentativeCourse[] = [];
  if (!response.ok) {
    // vercelデプロイ時にAPIがエラーになるとデプロイ出来ないことがあるので握りつぶす
    console.info('APIからのデータ取得に失敗しました。');
  } else {
    data = await response.json();
  }
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
    ai: <Brain className="h-8 w-8 text-orange-500" />,
    programming: <Code className="h-8 w-8 text-orange-500" />,
    'web-development': <BookOpen className="h-8 w-8 text-orange-500" />,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            生成AIとプログラミングを学ぼう
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            OpenLearn
            JPは、最新の生成AIやプログラミングについての学習コースを提供するプラットフォームです。
            初心者から上級者まで、あなたのレベルに合わせた学習体験を提供します。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 px-8">
                コースを探す
              </Button>
            </Link>
            <Link href="/exams">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 text-lg py-6 px-8"
              >
                試験に挑戦する
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.map((category) => (
        <section key={category.id} className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              {iconMap[category.id] || (
                <BookOpen className="h-8 w-8 text-orange-500" />
              )}
              <h2 className="text-2xl font-bold text-gray-800">
                {category.title}
              </h2>
            </div>
            <Link
              href={`/courses?category=${category.id}`}
              className="text-orange-500 hover:underline flex items-center"
            >
              すべて見る <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <p className="text-gray-600 mb-6">{category.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.courses.map((course) => (
              <Card
                key={course.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-800">
                      {course.title}
                    </CardTitle>
                    <button className="text-gray-400 hover:text-orange-500">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <CardDescription className="flex gap-3 mt-2">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs">
                      {course.level}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {course.duration}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">
                    {course.title}
                    に関する基礎から応用までを学べるコースです。実践的な例を通して理解を深めることができます。
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/courses/${course.id}`} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
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
      <section className="bg-orange-50 rounded-xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            知識をテストしよう
          </h2>
          <p className="text-xl text-gray-700">
            学んだ知識を試験で確認し、あなたのスキルレベルを証明しましょう。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {iconMap[category.id] || (
                    <BookOpen className="h-8 w-8 text-orange-500" />
                  )}
                  <CardTitle>{category.title}試験</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {category.title}
                  の知識を確認するための試験です。合格すると認定証が発行されます。
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/exams?category=${category.id}`}
                  className="w-full"
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
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
