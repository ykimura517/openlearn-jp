'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import type { ReferencesResponse } from '@/types/api';
import { apiFetch } from '@/lib/apiClient';

interface ReferencesSectionProps {
  courseId: string;
  articleId: string;
}

export default function ReferencesSection({
  courseId,
  articleId,
}: ReferencesSectionProps) {
  const [references, setReferences] = useState<ReferencesResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReferences = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await apiFetch<ReferencesResponse>(
          `/api/v1/courses/${courseId}/articles/${articleId}/references`
        );
        setReferences(data);
      } catch (err) {
        console.error('Error fetching references:', err);
        setError(
          err instanceof Error
            ? err.message
            : '参考リンクの取得中にエラーが発生しました。'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferences();
  }, [courseId, articleId]);

  if (isLoading) {
    return (
      <div className='mb-12'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>参考リンク</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className='animate-pulse'>
              <div className='h-8 bg-gray-200 rounded w-3/4 mb-2'></div>
              <div className='h-16 bg-gray-200 rounded'></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !references || references.references.length === 0) {
    return null;
  }

  return (
    <div className='mb-12'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>参考リンク</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {references.references.map((reference, index) => {
          // URLに"openlearn.jp"が含まれていない場合は別ドメインと判定してnofollowを付与
          const isExternal = !reference.url.includes('openlearn.jp');
          return (
            <Card key={index} className='hover:shadow-md transition-shadow'>
              <CardHeader className='pb-2'>
                <CardTitle className='text-lg text-gray-800 flex items-start'>
                  <span className='flex-1'>{reference.title}</span>
                  {reference.url !== '#' && (
                    <a
                      href={reference.url}
                      target='_blank'
                      rel={`noopener${isExternal ? ' nofollow' : ''}`}
                      className='text-orange-500 hover:text-orange-600'
                    >
                      <ExternalLink className='h-4 w-4' />
                    </a>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 text-sm'>{reference.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
