import { type NextRequest, NextResponse } from "next/server"
import type { CoursesResponse } from "@/types/api"

export async function GET(request: NextRequest) {
  // URLからクエリパラメータを取得
  const searchParams = request.nextUrl.searchParams
  const page = Number.parseInt(searchParams.get("page") || "1")
  const pageSize = Number.parseInt(searchParams.get("pageSize") || "9")
  const search = searchParams.get("search") || ""
  const category = searchParams.get("category") || "all"
  const level = searchParams.get("level") || "all"

  // モックデータ
  const mockCourses = [
    {
      id: "intro-to-ai",
      title: "生成AIの基礎",
      description:
        "生成AIの基本概念、歴史、種類について学びます。ChatGPTやStable Diffusionなどの代表的なモデルの仕組みや使い方を解説します。",
      category: "ai",
      categoryName: "生成AI",
      level: "初級",
      duration: "2時間",
      lessons: 5,
    },
    {
      id: "prompt-engineering",
      title: "プロンプトエンジニアリング入門",
      description:
        "AIモデルから最適な結果を得るためのプロンプト設計技術を学びます。効果的なプロンプトの書き方や、様���なユースケースに応じたプロンプトの最適化方法を解説します。",
      category: "ai",
      categoryName: "生成AI",
      level: "中級",
      duration: "3時間",
      lessons: 7,
    },
    {
      id: "ai-ethics",
      title: "AIと倫理",
      description:
        "AIの発展に伴う倫理的な問題や社会的影響について考察します。AIの公平性、透明性、プライバシー、著作権などの問題について学びます。",
      category: "ai",
      categoryName: "生成AI",
      level: "中級",
      duration: "2.5時間",
      lessons: 6,
    },
    {
      id: "javascript-basics",
      title: "JavaScript基礎",
      description:
        "JavaScriptの基本的な文法、データ型、関数、オブジェクト指向プログラミングについて学びます。実践的な例を通してWebプログラミングの基礎を身につけます。",
      category: "programming",
      categoryName: "プログラミング",
      level: "初級",
      duration: "4時間",
      lessons: 10,
    },
    {
      id: "python-data-science",
      title: "PythonによるデータサイエンスⅠ",
      description:
        "Pythonを使ったデータ分析の基礎を学びます。NumPy、Pandas、Matplotlibなどのライブラリを使ったデータの操作、可視化、分析手法を解説します。",
      category: "programming",
      categoryName: "プログラミング",
      level: "中級",
      duration: "5時間",
      lessons: 12,
    },
    {
      id: "react-fundamentals",
      title: "React入門",
      description:
        "Reactの基本概念、コンポーネント、状態管理、ルーティングなどについて学びます。実際にアプリケーションを作りながらReactの使い方を身につけます。",
      category: "programming",
      categoryName: "プログラミング",
      level: "中級",
      duration: "4時間",
      lessons: 9,
    },
    {
      id: "html-css-basics",
      title: "HTML・CSS基礎",
      description:
        "WebページのマークアップとスタイリングのためのHTML・CSSの基礎を学びます。セマンティックなHTMLの書き方や、レスポンシブデザインの実装方法を解説します。",
      category: "web-development",
      categoryName: "Web開発",
      level: "初級",
      duration: "3時間",
      lessons: 8,
    },
    {
      id: "responsive-design",
      title: "レスポンシブデザイン入門",
      description:
        "様々なデバイスに対応するレスポンシブWebデザインの考え方と実装方法を学びます。メディアクエリ、フレックスボックス、グリッドレイアウトなどの技術を解説します。",
      category: "web-development",
      categoryName: "Web開発",
      level: "中級",
      duration: "2.5時間",
      lessons: 6,
    },
    {
      id: "web-accessibility",
      title: "Webアクセシビリティ",
      description:
        "誰もがWebコンテンツを利用できるようにするためのアクセシビリティの考え方と実装方法を学びます。WAI-ARIAの使い方や、キーボード操作への対応方法を解説します。",
      category: "web-development",
      categoryName: "Web開発",
      level: "中級",
      duration: "2時間",
      lessons: 5,
    },
    {
      id: "advanced-javascript",
      title: "JavaScript上級テクニック",
      description:
        "JavaScriptの高度な機能や最新の仕様について学びます。非同期処理、モジュール、プロトタイプ、クロージャなどの概念を深く理解します。",
      category: "programming",
      categoryName: "プログラミング",
      level: "上級",
      duration: "6時間",
      lessons: 12,
    },
    {
      id: "vue-basics",
      title: "Vue.js入門",
      description:
        "Vue.jsの基本的な使い方、コンポーネント、状態管理、ルーティングなどについて学びます。実際にアプリケーションを作りながらVue.jsの使い方を身につけます。",
      category: "programming",
      categoryName: "プログラミング",
      level: "中級",
      duration: "4時間",
      lessons: 8,
    },
    {
      id: "ai-image-generation",
      title: "AIによる画像生成",
      description:
        "Stable Diffusion、DALL-Eなどの画像生成AIの仕組みと使い方について学びます。効果的なプロンプトの書き方や、生成した画像の編集方法を解説します。",
      category: "ai",
      categoryName: "生成AI",
      level: "中級",
      duration: "3.5時間",
      lessons: 7,
    },
  ]

  // フィルタリング
  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "all" || course.category === category
    const matchesLevel = level === "all" || course.level === level

    return matchesSearch && matchesCategory && matchesLevel
  })

  // ページネーション
  const totalCourses = filteredCourses.length
  const totalPages = Math.ceil(totalCourses / pageSize)
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedCourses = filteredCourses.slice(startIndex, endIndex)

  // レスポンスの作成
  const response: CoursesResponse = {
    courses: paginatedCourses,
    totalCourses,
    totalPages,
  }

  // 遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(response)
}

