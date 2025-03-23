import { type NextRequest, NextResponse } from "next/server"
import type { LessonNavigationResponse } from "@/types/api"

interface RouteParams {
  params: {
    id: string
    lessonId: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id: courseId, lessonId } = params

  // モックデータ
  const mockCourseLessons: Record<string, LessonNavigationResponse> = {
    "intro-to-ai": {
      currentLesson: { id: "lesson-1", title: "生成AIとは何か", duration: "20分" },
      prevLesson: null,
      nextLesson: { id: "lesson-2", title: "大規模言語モデル（LLM）の仕組み", duration: "25分" },
      currentLessonIndex: 0,
      totalLessons: 5,
    },
    "prompt-engineering": {
      currentLesson: { id: "lesson-1", title: "プロンプトエンジニアリングとは", duration: "20分" },
      prevLesson: null,
      nextLesson: { id: "lesson-2", title: "効果的なプロンプトの構造", duration: "30分" },
      currentLessonIndex: 0,
      totalLessons: 7,
    },
  }

  // レッスンIDに基づいて動的にナビゲーション情報を生成
  let navigationInfo: LessonNavigationResponse

  if (courseId === "intro-to-ai") {
    const lessons = [
      { id: "lesson-1", title: "生成AIとは何か", duration: "20分" },
      { id: "lesson-2", title: "大規模言語モデル（LLM）の仕組み", duration: "25分" },
      { id: "lesson-3", title: "ChatGPTの使い方と活用例", duration: "30分" },
      { id: "lesson-4", title: "画像生成AIの基礎", duration: "25分" },
      { id: "lesson-5", title: "生成AIの未来と課題", duration: "20分" },
    ]

    const currentIndex = lessons.findIndex((lesson) => lesson.id === lessonId)

    if (currentIndex !== -1) {
      navigationInfo = {
        currentLesson: lessons[currentIndex],
        prevLesson: currentIndex > 0 ? lessons[currentIndex - 1] : null,
        nextLesson: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null,
        currentLessonIndex: currentIndex,
        totalLessons: lessons.length,
      }
    } else {
      // デフォルト値（レッスンが見つからない場合）
      navigationInfo = mockCourseLessons[courseId]
    }
  } else if (courseId === "prompt-engineering") {
    const lessons = [
      { id: "lesson-1", title: "プロンプトエンジニアリングとは", duration: "20分" },
      { id: "lesson-2", title: "効果的なプロンプトの構造", duration: "30分" },
      { id: "lesson-3", title: "ユースケース別プロンプト設計", duration: "40分" },
      { id: "lesson-4", title: "プロンプトの最適化と反復", duration: "30分" },
      { id: "lesson-5", title: "高度なプロンプト技術", duration: "30分" },
      { id: "lesson-6", title: "プロンプトの評価と改善", duration: "20分" },
      { id: "lesson-7", title: "実践演習", duration: "30分" },
    ]

    const currentIndex = lessons.findIndex((lesson) => lesson.id === lessonId)

    if (currentIndex !== -1) {
      navigationInfo = {
        currentLesson: lessons[currentIndex],
        prevLesson: currentIndex > 0 ? lessons[currentIndex - 1] : null,
        nextLesson: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null,
        currentLessonIndex: currentIndex,
        totalLessons: lessons.length,
      }
    } else {
      // レッスンが見つからない場合のエラーハンドリングを改善
      return NextResponse.json({ error: `Lesson ${lessonId} not found in course ${courseId}` }, { status: 404 })
    }
  } else {
    // 未知のコースIDの場合はデフォルト値
    navigationInfo = {
      currentLesson: { id: lessonId, title: "レッスン", duration: "30分" },
      prevLesson: null,
      nextLesson: null,
      currentLessonIndex: 0,
      totalLessons: 1,
    }
  }

  // 遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 300))

  return NextResponse.json(navigationInfo)
}

