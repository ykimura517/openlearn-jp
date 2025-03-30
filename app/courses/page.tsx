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
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Share2, Search } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import type { CoursesResponse } from '@/types/api';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [isLoading, setIsLoading] = useState(true);
  const [coursesData, setCoursesData] = useState<CoursesResponse>({
    courses: [],
    totalCourses: 0,
    totalPages: 0,
  });

  // APIからコース一覧を取得
  const fetchCourses = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/v1/courses?page=${currentPage}&pageSize=${pageSize}&search=${searchQuery}&category=${categoryFilter}&level=${levelFilter}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }

      const data: CoursesResponse = await response.json();
      setCoursesData(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      // エラー処理
    } finally {
      setIsLoading(false);
    }
  };

  // フィルターやページネーションが変更されたときにコースを再取得
  useEffect(() => {
    fetchCourses();
  }, [searchQuery, categoryFilter, levelFilter, currentPage, pageSize]);

  // ページ変更ハンドラー
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ページネーションアイテムの生成
  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    if (coursesData.totalPages <= maxVisiblePages) {
      // 全ページ数が表示可能な最大数以下の場合、すべてのページを表示
      for (let i = 1; i <= coursesData.totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              isActive={currentPage === i}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // 最初のページを表示
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            isActive={currentPage === 1}
            onClick={() => handlePageChange(1)}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );

      // 現在のページが最初のページから離れている場合、省略記号を表示
      if (currentPage > 3) {
        items.push(
          <PaginationItem key='ellipsis-start'>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // 現在のページの周辺のページを表示
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(coursesData.totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              isActive={currentPage === i}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // 現在のページが最後のページから離れている場合、省略記号を表示
      if (currentPage < coursesData.totalPages - 2) {
        items.push(
          <PaginationItem key='ellipsis-end'>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // 最後のページを表示
      items.push(
        <PaginationItem key={coursesData.totalPages}>
          <PaginationLink
            isActive={currentPage === coursesData.totalPages}
            onClick={() => handlePageChange(coursesData.totalPages)}
          >
            {coursesData.totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-gray-800 mb-8'>コース一覧</h1>

      {/* フィルター */}
      <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-8'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
              <Input
                placeholder='コースを検索...'
                className='pl-10'
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // 検索時は1ページ目に戻る
                }}
              />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='w-full sm:w-48'>
              <Select
                value={categoryFilter}
                onValueChange={(value) => {
                  setCategoryFilter(value);
                  setCurrentPage(1); // フィルター変更時は1ページ目に戻る
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder='カテゴリー' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>すべてのカテゴリー</SelectItem>
                  <SelectItem value='ai'>生成AI</SelectItem>
                  <SelectItem value='programming'>プログラミング</SelectItem>
                  <SelectItem value='web-development'>Web開発</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='w-full sm:w-48'>
              <Select
                value={levelFilter}
                onValueChange={(value) => {
                  setLevelFilter(value);
                  setCurrentPage(1); // フィルター変更時は1ページ目に戻る
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder='レベル' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>すべてのレベル</SelectItem>
                  <SelectItem value='初級'>初級</SelectItem>
                  <SelectItem value='中級'>中級</SelectItem>
                  <SelectItem value='上級'>上級</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* 結果 */}
      <div className='mb-4'>
        <p className='text-gray-600'>
          {coursesData.totalCourses} コースが見つかりました
        </p>
      </div>

      {/* ローディング状態 */}
      {isLoading ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[...Array(6)].map((_, index) => (
            <Card key={index} className='animate-pulse'>
              <CardHeader className='pb-2'>
                <div className='h-6 bg-gray-200 rounded w-3/4 mb-2'></div>
                <div className='h-4 bg-gray-200 rounded w-1/2'></div>
              </CardHeader>
              <CardContent>
                <div className='h-4 bg-gray-200 rounded w-full mb-2'></div>
                <div className='h-4 bg-gray-200 rounded w-full mb-2'></div>
                <div className='h-4 bg-gray-200 rounded w-3/4'></div>
              </CardContent>
              <CardFooter>
                <div className='h-10 bg-gray-200 rounded w-full'></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <>
          {/* コース一覧 */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {coursesData.courses.map((course) => (
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
                  <CardDescription className='flex flex-wrap gap-2 mt-2'>
                    <span className='bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs'>
                      {course.categoryName}
                    </span>
                    <span className='bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs'>
                      {course.level}
                    </span>
                    <span className='bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs'>
                      {course.durationMin}分
                    </span>
                    <span className='bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs'>
                      レッスン数: {course.articleCount}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 line-clamp-3'>
                    {course.description}
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

          {/* 空の状態 */}
          {coursesData.courses.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-gray-500 text-lg mb-4'>
                検索条件に一致するコースが見つかりませんでした。
              </p>
              <p className='text-gray-500'>
                検索条件を変更して、もう一度お試しください。
              </p>
            </div>
          )}

          {/* ページネーション */}
          {coursesData.totalPages > 1 && (
            <div className='mt-8'>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        handlePageChange(Math.max(1, currentPage - 1))
                      }
                      className={
                        currentPage === 1
                          ? 'pointer-events-none opacity-50'
                          : ''
                      }
                    />
                  </PaginationItem>

                  {renderPaginationItems()}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handlePageChange(
                          Math.min(coursesData.totalPages, currentPage + 1)
                        )
                      }
                      className={
                        currentPage === coursesData.totalPages
                          ? 'pointer-events-none opacity-50'
                          : ''
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </>
      )}
    </div>
  );
}
