import { type NextRequest, NextResponse } from "next/server"
import { getAuth } from "firebase-admin/auth"
import type { AIChatRequest, AIChatResponse } from "@/types/api"
import { initializeFirebaseAdmin } from "@/lib/firebase-admin"

// Firebase Adminの初期化
initializeFirebaseAdmin()

export async function POST(request: NextRequest) {
  try {
    // 認証チェック
    const authHeader = request.headers.get("Authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const token = authHeader.split("Bearer ")[1]

    try {
      // トークンの検証
      await getAuth().verifyIdToken(token)
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    // リクエストボディの解析
    const body: AIChatRequest = await request.json()
    const { message, lessonTitle, history } = body

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // AIレスポンスの生成（実際のアプリケーションではAI APIを呼び出す）
    const aiResponses = [
      `「${lessonTitle}」について、ご質問ありがとうございます。${message}についてですが、このレッスンでは生成AIの基本的な概念と種類について説明しています。さらに詳しく知りたい点はありますか？`,
      `良い質問ですね！${message}に関しては、生成AIの発展において重要なポイントです。特にTransformerアーキテクチャの登場以降、大きな進化を遂げました。他に気になる点はありますか？`,
      `${message}については、実際の応用例を見るとより理解が深まります。例えば、テキスト生成AIはコンテンツ作成、コード生成、翻訳などで活用されています。具体的な例を知りたい場合は、お気軽にお尋ねください。`,
      `${message}は興味深いトピックですね。生成AIの倫理的な側面も含めて考えると、技術の発展だけでなく社会的な影響も重要です。このレッスンの後半で詳しく触れていますが、補足情報が必要でしたらお知らせください。`,
    ]

    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

    // レスポンスの作成
    const response: AIChatResponse = {
      message: randomResponse,
      timestamp: new Date().toISOString(),
    }

    // 遅延をシミュレート
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(response)
  } catch (error) {
    console.error("AI Chat API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

