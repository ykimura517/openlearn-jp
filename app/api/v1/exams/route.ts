import { type NextRequest, NextResponse } from "next/server"
import type { ExamsResponse } from "@/types/api"

export async function GET(request: NextRequest) {
  // URLからクエリパラメータを取得
  const searchParams = request.nextUrl.searchParams
  const page = Number.parseInt(searchParams.get("page") || "1")
  const pageSize = Number.parseInt(searchParams.get("pageSize") || "6")
  const search = searchParams.get("search") || ""
  const category = searchParams.get("category") || "all"
  const level = searchParams.get("level") || "all"

  // モックデータ
  const mockExams = [
    {
      id: "ai-basics",
      title: "生成AI基礎試験",
      description: "生成AIの基本概念や歴史、種類について理解度を測定します。",
      category: "ai",
      categoryName: "生成AI",
      level: "初級",
      questions: 20,
      time: "30分",
    },
    {
      id: "prompt-engineering",
      title: "プロンプトエンジニアリング試験",
      description: "効果的なプロンプトの書き方や最適化方法についての知識を測定します。",
      category: "ai",
      categoryName: "生成AI",
      level: "中級",
      questions: 15,
      time: "25分",
    },
    {
      id: "ai-applications",
      title: "生成AI応用試験",
      description: "生成AIの実践的な応用や高度な使用方法についての知識を測定します。",
      category: "ai",
      categoryName: "生成AI",
      level: "上級",
      questions: 25,
      time: "40分",
    },
    {
      id: "javascript",
      title: "JavaScript試験",
      description: "JavaScriptの基本的な文法や概念についての理解度を測定します。",
      category: "programming",
      categoryName: "プログラミング",
      level: "初級",
      questions: 20,
      time: "30分",
    },
    {
      id: "python",
      title: "Python試験",
      description: "Pythonの基本から応用までの知識を測定します。",
      category: "programming",
      categoryName: "プログラミング",
      level: "中級",
      questions: 20,
      time: "30分",
    },
    {
      id: "react",
      title: "React試験",
      description: "Reactの基本概念やコンポーネント設計についての知識を測定します。",
      category: "programming",
      categoryName: "プログラミング",
      level: "中級",
      questions: 15,
      time: "25分",
    },
    {
      id: "html-css",
      title: "HTML・CSS試験",
      description: "HTMLとCSSの基本的な使い方や概念についての理解度を測定します。",
      category: "web-development",
      categoryName: "Web開発",
      level: "初級",
      questions: 20,
      time: "30分",
    },
    {
      id: "responsive-design",
      title: "レスポンシブデザイン試験",
      description: "レスポンシブWebデザインの考え方と実装方法についての知識を測定します。",
      category: "web-development",
      categoryName: "Web開発",
      level: "中級",
      questions: 15,
      time: "25分",
    },
    {
      id: "web-accessibility",
      title: "Webアクセシビリティ試験",
      description: "Webアクセシビリティの基準や実装方法についての知識を測定します。",
      category: "web-development",
      categoryName: "Web開発",
      level: "中級",
      questions: 15,
      time: "25分",
    },
    {
      id: "advanced-js",
      title: "JavaScript上級試験",
      description: "JavaScriptの高度な機能や最新の仕様についての知識を測定します。",
      category: "programming",
      categoryName: "プログラミング",
      level: "上級",
      questions: 25,
      time: "40分",
    },
    {
      id: "node-js",
      title: "Node.js試験",
      description: "Node.jsの基本的な使い方やサーバーサイドJavaScriptについての知識を測定します。",
      category: "programming",
      categoryName: "プログラミング",
      level: "中級",
      questions: 20,
      time: "30分",
    },
    {
      id: "ai-ethics",
      title: "AI倫理試験",
      description: "AIの倫理的な問題や社会的影響についての理解度を測定します。",
      category: "ai",
      categoryName: "生成AI",
      level: "中級",
      questions: 15,
      time: "25分",
    },
  ]

  // フィルタリング
  const filteredExams = mockExams.filter((exam) => {
    const matchesSearch =
      exam.title.toLowerCase().includes(search.toLowerCase()) ||
      exam.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "all" || exam.category === category
    const matchesLevel = level === "all" || exam.level === level

    return matchesSearch && matchesCategory && matchesLevel
  })

  // ページネーション
  const totalExams = filteredExams.length
  const totalPages = Math.ceil(totalExams / pageSize)
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedExams = filteredExams.slice(startIndex, endIndex)

  // レスポンスの作成
  const response: ExamsResponse = {
    exams: paginatedExams,
    totalExams,
    totalPages,
  }

  // 遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(response)
}

