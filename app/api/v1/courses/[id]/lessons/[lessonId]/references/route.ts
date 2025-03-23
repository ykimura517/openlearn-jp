import { type NextRequest, NextResponse } from "next/server"
import type { ReferencesResponse } from "@/types/api"

interface RouteParams {
  params: {
    id: string
    lessonId: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id: courseId, lessonId } = params

  // モックデータ
  const mockReferences: Record<string, Record<string, ReferencesResponse>> = {
    "intro-to-ai": {
      "lesson-1": {
        references: [
          {
            title: "生成AIの歴史と発展",
            url: "#",
            description: "生成AIの歴史的な発展と主要なマイルストーンについての詳細な解説記事。",
          },
          {
            title: "OpenAI公式ドキュメント",
            url: "https://openai.com/docs",
            description: "OpenAIの公式ドキュメント。APIの使い方や各モデルの詳細情報が掲載されています。",
          },
          {
            title: "生成AIの種類と応用例",
            url: "#",
            description: "様々な種類の生成AIとその実際の応用例についての包括的なガイド。",
          },
        ],
      },
      "lesson-2": {
        references: [
          {
            title: "Transformerアーキテクチャの解説",
            url: "https://arxiv.org/abs/1706.03762",
            description: "「Attention Is All You Need」論文。Transformerアーキテクチャの原論文です。",
          },
          {
            title: "大規模言語モデルの仕組み",
            url: "#",
            description: "LLMの内部構造と動作原理について、わかりやすく解説した技術記事。",
          },
          {
            title: "GPTモデルの進化",
            url: "#",
            description: "GPT-1からGPT-4までの進化の過程と各モデルの特徴についての解説。",
          },
          {
            title: "LLMのパラメータとスケーリング法則",
            url: "#",
            description: "モデルサイズと性能の関係、スケーリング法則についての研究解説。",
          },
        ],
      },
    },
    "prompt-engineering": {
      "lesson-1": {
        references: [
          {
            title: "OpenAIのプロンプトエンジニアリングガイド",
            url: "https://platform.openai.com/docs/guides/prompt-engineering",
            description: "OpenAIが提供する公式のプロンプトエンジニアリングガイド。",
          },
          {
            title: "効果的なプロンプト設計のパターン集",
            url: "#",
            description: "様々なユースケース別のプロンプトパターンとベストプラクティスをまとめた資料。",
          },
          {
            title: "プロンプトエンジニアリングの事例研究",
            url: "#",
            description: "実際のビジネスシーンでのプロンプトエンジニアリング適用事例と成果の分析。",
          },
        ],
      },
    },
  }

  // デフォルトの参考リンク（コースIDやレッスンIDに対応するデータがない場合）
  const defaultReferences: ReferencesResponse = {
    references: [
      {
        title: "関連資料1",
        url: "#",
        description: "このレッスンに関連する参考資料です。",
      },
      {
        title: "関連資料2",
        url: "#",
        description: "このレッスンの内容をさらに深く学ぶための資料です。",
      },
    ],
  }

  // 指定されたコースとレッスンの参考リンクを取得（なければデフォルト）
  const references = mockReferences[courseId]?.[lessonId] || defaultReferences

  // 遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 200))

  return NextResponse.json(references)
}

