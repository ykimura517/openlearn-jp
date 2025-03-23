"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Share2 } from "lucide-react"
import MarkdownContent from "@/components/markdown-content"
import SocialShareButtons from "@/components/social-share-buttons"
import type { CourseDetail, RelatedCoursesResponse } from "@/types/api"

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const courseId = params.id
  const [course, setCourse] = useState<CourseDetail | null>(null)
  const [relatedCourses, setRelatedCourses] = useState<RelatedCoursesResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // コース詳細を取得
  useEffect(() => {
    const fetchCourseDetails = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // コース詳細の取得
        const courseResponse = await fetch(`/api/v1/courses/${courseId}`)
        if (!courseResponse.ok) {
          throw new Error("Failed to fetch course details")
        }
        const courseData: CourseDetail = await courseResponse.json()
        setCourse(courseData)

        // 関連コースの取得
        const relatedResponse = await fetch(`/api/v1/courses/${courseId}/related`)
        if (!relatedResponse.ok) {
          throw new Error("Failed to fetch related courses")
        }
        const relatedData: RelatedCoursesResponse = await relatedResponse.json()
        setRelatedCourses(relatedData)
      } catch (err) {
        console.error("Error fetching course data:", err)
        setError("コース情報の取得中にエラーが発生しました。")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourseDetails()
  }, [courseId])

  // ローディング状態
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="flex gap-2 mb-6">
            <div className="h-6 bg-gray-200 rounded w-20"></div>
            <div className="h-6 bg-gray-200 rounded w-20"></div>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
              </div>
              <div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="space-y-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex">
                      <div className="h-6 w-6 bg-gray-200 rounded-full mr-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 bg-gray-200 rounded mb-12"></div>
        </div>
      </div>
    )
  }

  // エラー状態
  if (error || !course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">エラーが発生しました</h2>
          <p className="text-red-600 mb-4">{error || "コース情報を取得できませんでした。"}</p>
          <Link href="/courses">
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              コース一覧に戻る
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/courses" className="text-orange-500 hover:underline mb-4 inline-block">
          ← コース一覧に戻る
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-orange-100 text-orange-600 border-orange-200">
            {course.categoryName}
          </Badge>
          <Badge variant="outline" className="bg-orange-100 text-orange-600 border-orange-200">
            {course.level}
          </Badge>
          <Badge variant="outline" className="bg-gray-100 text-gray-600 border-gray-200">
            {course.duration}
          </Badge>
        </div>
        <SocialShareButtons title={course.title} className="mb-6" />
      </div>

      {/* コース概要ボックス */}
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-orange-600 mb-4">コース概要</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">このコースについて</h3>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-1">対象者</h4>
              <p className="text-gray-700">{course.targetAudience}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-1">前提条件</h4>
              <p className="text-gray-700">{course.prerequisites}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">コース内容</h3>
            <ul className="space-y-3">
              {course.lessons.map((lesson, index) => (
                <li key={lesson.id} className="flex items-start">
                  <div className="bg-orange-200 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-gray-800">{lesson.title}</span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> {lesson.duration}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* コースコンテンツ */}
      <div className="mb-12">
        <MarkdownContent content={course.content} />
      </div>

      {/* コース開始ボタン */}
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-12 text-center">
        <h2 className="text-xl font-bold text-orange-600 mb-2">学習を始めましょう</h2>
        <p className="text-gray-700 mb-4">このコースの最初のレッスンから学習を開始できます。</p>
        <Link href={`/courses/${courseId}/lessons/${course.lessons[0].id}`}>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
            コースを始める <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* 関連コース */}
      {relatedCourses && relatedCourses.courses.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">関連コース</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.courses.map((relatedCourse) => (
              <Card key={relatedCourse.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-800">{relatedCourse.title}</CardTitle>
                    <button className="text-gray-400 hover:text-orange-500">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                  <CardDescription className="flex gap-2 mt-2">
                    <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs">
                      {relatedCourse.level}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                      {relatedCourse.duration}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-2">{relatedCourse.title}に関する学習コースです。</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/courses/${relatedCourse.id}`} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 text-sm"
                    >
                      コースを見る
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

