"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import SocialShareButtons from "@/components/social-share-buttons"
import LessonContent from "./lesson-content"
import PracticeQuestions from "./practice-questions"
import AiChatSection from "./ai-chat-section"
import type { LessonDetail, LessonNavigationResponse, PracticeQuestionsResponse, ReferencesResponse } from "@/types/api"

interface LessonPageProps {
  params: {
    id: string
    lessonId: string
  }
}

export default function LessonPage({ params }: LessonPageProps) {
  const { id: courseId, lessonId } = params
  const [lessonData, setLessonData] = useState<LessonDetail | null>(null)
  const [navigation, setNavigation] = useState<LessonNavigationResponse | null>(null)
  const [questions, setQuestions] = useState<PracticeQuestionsResponse | null>(null)
  const [references, setReferences] = useState<ReferencesResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // データの取得
  useEffect(() => {
    const fetchLessonData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // 並列でデータを取得
        const [lessonResponse, navigationResponse, questionsResponse, referencesResponse] = await Promise.all([
          fetch(`/api/v1/courses/${courseId}/lessons/${lessonId}`),
          fetch(`/api/v1/courses/${courseId}/lessons/${lessonId}/navigation`),
          fetch(`/api/v1/courses/${courseId}/lessons/${lessonId}/questions`),
          fetch(`/api/v1/courses/${courseId}/lessons/${lessonId}/references`),
        ])

        // レスポンスのチェックと詳細なエラーメッセージ
        if (!lessonResponse.ok) {
          const errorText = await lessonResponse.text()
          throw new Error(`Failed to fetch lesson content: ${lessonResponse.status} - ${errorText}`)
        }
        if (!navigationResponse.ok) {
          const errorText = await navigationResponse.text()
          throw new Error(`Failed to fetch lesson navigation: ${navigationResponse.status} - ${errorText}`)
        }
        if (!questionsResponse.ok) {
          const errorText = await questionsResponse.text()
          throw new Error(`Failed to fetch practice questions: ${questionsResponse.status} - ${errorText}`)
        }
        if (!referencesResponse.ok) {
          const errorText = await referencesResponse.text()
          throw new Error(`Failed to fetch references: ${referencesResponse.status} - ${errorText}`)
        }

        // データの解析
        const lessonDataJson: LessonDetail = await lessonResponse.json()
        const navigationJson: LessonNavigationResponse = await navigationResponse.json()
        const questionsJson: PracticeQuestionsResponse = await questionsResponse.json()
        const referencesJson: ReferencesResponse = await referencesResponse.json()

        // 状態の更新
        setLessonData(lessonDataJson)
        setNavigation(navigationJson)
        setQuestions(questionsJson)
        setReferences(referencesJson)
      } catch (err) {
        console.error("Error fetching lesson data:", err)
        setError(err instanceof Error ? err.message : "レッスンデータの取得中にエラーが発生しました。")
      } finally {
        setIsLoading(false)
      }
    }

    fetchLessonData()
  }, [courseId, lessonId])

  // ローディング状態
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>

          <div className="bg-gray-100 rounded-lg p-4 mb-8">
            <div className="flex justify-between">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="flex space-x-2">
                <div className="h-10 bg-gray-200 rounded w-32"></div>
                <div className="h-10 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-gray-200 rounded mb-12"></div>

          <div className="mb-12">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="space-y-4">
              <div className="h-40 bg-gray-200 rounded"></div>
              <div className="h-40 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // エラー状態
  if (error || !lessonData || !navigation) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">エラーが発生しました</h2>
          <p className="text-red-600 mb-4">{error || "レッスンデータを取得できませんでした。"}</p>
          <Link href={`/courses/${courseId}`}>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              コース概要に戻る
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href={`/courses/${courseId}`} className="text-orange-500 hover:underline mb-4 inline-block">
          ← コース概要に戻る
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{lessonData.courseTitle}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{lessonData.title}</h2>
        <SocialShareButtons title={`${lessonData.courseTitle} - ${lessonData.title}`} className="mb-6" />
      </div>

      {/* レッスンナビゲーション */}
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

      {/* レッスンコンテンツ - サーバーサイドレンダリング */}
      <div className="mb-12">
        <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>}>
          <LessonContent content={lessonData.content} />
        </Suspense>
      </div>

      {/* 練習問題 - クライアントサイドインタラクティブ */}
      {questions && questions.questions.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">練習問題</h2>
          <PracticeQuestions questions={questions.questions} />
        </div>
      )}

      {/* AIチャットセクション - クライアントサイドインタラクティブ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">AIに質問する</h2>
        <AiChatSection lessonTitle={lessonData.title} />
      </div>

      {/* 次のレッスンボタン */}
      {navigation.nextLesson && (
        <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mb-12 text-center">
          <h2 className="text-xl font-bold text-orange-600 mb-2">次のレッスンに進みましょう</h2>
          <p className="text-gray-700 mb-4">次は「{navigation.nextLesson.title}」について学びます。</p>
          <Link href={`/courses/${courseId}/lessons/${navigation.nextLesson.id}`}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
              次のレッスンへ進む <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      )}

      {/* 参考リンク */}
      {references && references.references.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">参考リンク</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.references.map((reference, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-800 flex items-start">
                    <span className="flex-1">{reference.title}</span>
                    {reference.url !== "#" && (
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{reference.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

