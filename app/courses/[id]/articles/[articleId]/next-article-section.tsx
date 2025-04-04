'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { CourseArticleNavigationResponse } from '@/types/api';

interface NextArticleSectionProps {
  courseId: string;
  articleId: string;
}

export default function NextArticleSection({
  courseId,
  articleId,
}: NextArticleSectionProps) {
  const [navigation, setNavigation] =
    useState<CourseArticleNavigationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNavigation = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `/api/v1/courses/${courseId}/articles/${articleId}/navigation`
        );

        if (response.ok) {
          const data = await response.json();
          setNavigation(data);
        }
      } catch (err) {
        console.error('Error fetching navigation:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNavigation();
  }, [courseId, articleId]);

  if (isLoading || !navigation || !navigation.nextCourseArticle) {
    return null;
  }

  return (
    <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-12 text-center">
      <h2 className="text-xl font-bold text-orange-600 mb-2">
        次のレッスンに進みましょう
      </h2>
      <p className="text-gray-700 mb-4">
        次のレッスンのタイトルは「{navigation.nextCourseArticle.title}」です。
      </p>
      <Link
        href={`/courses/${courseId}/articles/${navigation.nextCourseArticle.id}`}
      >
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
          次のレッスンへ進む <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
}
