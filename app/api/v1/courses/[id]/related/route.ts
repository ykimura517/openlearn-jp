import { type NextRequest, NextResponse } from "next/server"
import type { RelatedCoursesResponse } from "@/types/api"

// interface RouteParams {
//   params: {
//     id: string
//   }
// }

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const {id} = await params
  const courseId = id

  const mockRelatedCourses: Record<string, RelatedCoursesResponse> = {
    "intro-to-ai": {
      courses: [
        { id: "prompt-engineering", title: "プロンプトエンジニアリング入門", level: "中級", duration: "3時間" },
        { id: "ai-ethics", title: "AIと倫理", level: "中級", duration: "2.5時間" },
        { id: "ai-applications", title: "生成AIの実践的応用", level: "中級", duration: "4時間" },
      ],
    },
    "prompt-engineering": {
      courses: [
        { id: "intro-to-ai", title: "生成AIの基礎", level: "初級", duration: "2時間" },
        { id: "ai-image-generation", title: "AIによる画像生成", level: "中級", duration: "3.5時間" },
        { id: "ai-ethics", title: "AIと倫理", level: "中級", duration: "2.5時間" },
      ],
    },
    "javascript-basics": {
      courses: [
        { id: "react-fundamentals", title: "React入門", level: "中級", duration: "4時間" },
        { id: "html-css-basics", title: "HTML・CSS基礎", level: "初級", duration: "3時間" },
        { id: "advanced-javascript", title: "JavaScript上級テクニック", level: "上級", duration: "6時間" },
      ],
    },
  }

  // デフォルトの関連コース（コースIDに対応するデータがない場合）
  const defaultRelatedCourses: RelatedCoursesResponse = {
    courses: [
      { id: "intro-to-ai", title: "生成AIの基礎", level: "初級", duration: "2時間" },
      { id: "javascript-basics", title: "JavaScript基礎", level: "初級", duration: "4時間" },
      { id: "html-css-basics", title: "HTML・CSS基礎", level: "初級", duration: "3時間" },
    ],
  }

  // 指定されたコースIDの関連コースを取得（なければデフォルト）
  const relatedCourses = mockRelatedCourses[courseId] || defaultRelatedCourses

  // 遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 300))

  return NextResponse.json(relatedCourses)
}

