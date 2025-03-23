"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { LessonNavigationResponse } from "@/types/api"

interface NavigationSectionProps {
  courseId: string
  lessonId: string
}

export default function NavigationSection({ courseId, lessonId }: NavigationSectionProps) {
  const [navigation, setNavigation] = useState<LessonNavigationResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNavigation = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/v1/courses/${courseId}/lessons/${lessonId}/navigation`)

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`Failed to fetch lesson navigation: ${response.status} - ${errorText}`)
        }

        const data = await response.json()
        setNavigation(data)
      } catch (err) {
        console.error("Error fetching navigation:", err)
        setError(err instanceof Error ? err.message : "ナビゲーション情報の取得中にエラーが発生しました。")
      } finally {
        setIsLoading(false)
      }
    }

    fetchNavigation()
  }, [courseId, lessonId])

  if (isLoading) {
    return (
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-8 animate-pulse">
        <div className="flex justify-between">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="flex space-x-2">
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !navigation) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
        <p className="text-red-600 text-sm">ナビゲーション情報を読み込めませんでした。</p>
      </div>
    )
  }

  return (
    <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-8">
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-gray-700">
          レッスン {navigation.currentLessonIndex + 1} / {navigation.totalLessons}
        </div>
        <div className="flex space-x-2">
          {navigation.prevLesson && (
            <Link href={`/courses/${courseId}/lessons/${navigation.prevLesson.id}`}>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                <ArrowLeft className="mr-2 h-4 w-4" /> 前のレッスン
              </Button>
            </Link>
          )}
          {navigation.nextLesson && (
            <Link href={`/courses/${courseId}/lessons/${navigation.nextLesson.id}`}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                次のレッスン <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

