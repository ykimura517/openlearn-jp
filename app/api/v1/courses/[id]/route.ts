import { type NextRequest, NextResponse } from "next/server"
import type { CourseDetail } from "@/types/api"

export async function GET(request: NextRequest,  { params }: { params: Promise<{ id: string }> }) {
  const {id} = await params
  const courseId = id
  // モックデータ
  const mockCourses: Record<string, CourseDetail> = {
    "intro-to-ai": {
      id: "intro-to-ai",
      title: "生成AIの基礎",
      description:
        "生成AIの基本概念、歴史、種類について学びます。ChatGPTやStable Diffusionなどの代表的なモデルの仕組みや使い方を解説します。",
      category: "ai",
      categoryName: "生成AI",
      level: "初級",
      duration: "2時間",
      targetAudience: "AIに興味がある初心者、エンジニア、ビジネスパーソン",
      prerequisites: "特になし",
      lessons: [
        { id: "lesson-1", title: "生成AIとは何か", duration: "20分" },
        { id: "lesson-2", title: "大規模言語モデル（LLM）の仕組み", duration: "25分" },
        { id: "lesson-3", title: "ChatGPTの使い方と活用例", duration: "30分" },
        { id: "lesson-4", title: "画像生成AIの基礎", duration: "25分" },
        { id: "lesson-5", title: "生成AIの未来と課題", duration: "20分" },
      ],
      content: `
# 生成AIの基礎

## はじめに

生成AIは、新しいコンテンツを作成することができる人工知能の一種です。テキスト、画像、音楽、動画など、様々な形式のコンテンツを生成することができます。

この講座では、生成AIの基本的な概念から、代表的なモデルの仕組み、実際の使い方まで、幅広く学んでいきます。

## 生成AIの種類

生成AIには主に以下のような種類があります：

1. **テキスト生成AI**：ChatGPT、GPT-4、LLaMAなど
2. **画像生成AI**：DALL-E、Stable Diffusion、Midjourneyなど
3. **音楽生成AI**：MusicLM、Jukebox、AMPERなど
4. **動画生成AI**：Sora、Gen-2、Runway MLなど

## 生成AIの仕組み

多くの生成AIは、**深層学習**と呼ばれる技術を使用しています。特に、**トランスフォーマー**と呼ばれるニューラルネットワークのアーキテクチャが広く使われています。

以下は、シンプルなトランスフォーマーモデルの例です：

\`\`\`python
import torch
import torch.nn as nn

class SimpleTransformer(nn.Module):
  def __init__(self, vocab_size, d_model, nhead, num_layers):
      super(SimpleTransformer, self).__init__()
      self.embedding = nn.Embedding(vocab_size, d_model)
      self.transformer = nn.Transformer(d_model, nhead, num_layers)
      self.fc_out = nn.Linear(d_model, vocab_size)
      
  def forward(self, src, tgt):
      src_emb = self.embedding(src)
      tgt_emb = self.embedding(tgt)
      out = self.transformer(src_emb, tgt_emb)
      return self.fc_out(out)
\`\`\`

## 生成AIの応用例

生成AIは様々な分野で応用されています：

- **コンテンツ作成**：記事、ブログ、マーケティングコピーの作成
- **コードの生成**：プログラミングコードの自動生成
- **デザイン支援**：ロゴ、イラスト、UIデザインの生成
- **言語翻訳**：高精度な機械翻訳
- **教育支援**：パーソナライズされた学習コンテンツの生成

## 生成AIの倫理的課題

生成AIの発展に伴い、以下のような倫理的課題も浮上しています：

- **著作権問題**：AIが生成したコンテンツの著作権は誰に帰属するのか
- **偽情報の拡散**：AIによる偽のニュースや画像の生成
- **バイアスと公平性**：AIモデルに含まれる社会的バイアス
- **プライバシー**：学習データに含まれる個人情報の扱い

これらの課題に対して、技術的・法的・社会的な対応が進められています。
      `,
    },
    "prompt-engineering": {
      id: "prompt-engineering",
      title: "プロンプトエンジニアリング入門",
      description:
        "AIモデルから最適な結果を得るためのプロンプト設計技術を学びます。効果的なプロンプトの書き方や、様々なユースケースに応じたプロンプトの最適化方法を解説します。",
      category: "ai",
      categoryName: "生成AI",
      level: "中級",
      duration: "3時間",
      targetAudience: "AIを活用したいビジネスパーソン、エンジニア、クリエイター",
      prerequisites: "生成AIの基本的な知識",
      lessons: [
        { id: "lesson-1", title: "プロンプトエンジニアリングとは", duration: "20分" },
        { id: "lesson-2", title: "効果的なプロンプトの構造", duration: "30分" },
        { id: "lesson-3", title: "ユースケース別プロンプト設計", duration: "40分" },
        { id: "lesson-4", title: "プロンプトの最適化と反復", duration: "30分" },
        { id: "lesson-5", title: "高度なプロンプト技術", duration: "30分" },
        { id: "lesson-6", title: "プロンプトの評価と改善", duration: "20分" },
        { id: "lesson-7", title: "実践演習", duration: "30分" },
      ],
      content: `
# プロンプトエンジニアリング入門

## はじめに

プロンプトエンジニアリングとは、AIモデルから望ましい結果を得るためのプロンプト（指示文）を設計・最適化する技術です。適切なプロンプトを作成することで、AIの出力の質と精度を大幅に向上させることができます。

この講座では、効果的なプロンプトの書き方から、様々なユースケースに応じたプロンプトの最適化方法まで、実践的なスキルを身につけていきます。

## プロンプトの基本構造

効果的なプロンプトには、以下の要素が含まれていることが多いです：

1. **明確な指示**：AIに何をしてほしいかを明確に伝える
2. **コンテキスト**：関連する背景情報や制約条件を提供する
3. **例示**：期待する出力の例を示す（few-shot learning）
4. **フォーマット指定**：出力の形式や構造を指定する

## プロンプトパターン

以下は、よく使われるプロンプトパターンの例です：

### ロールプロンプト

\`\`\`
あなたは経験豊富なマーケティングコピーライターです。以下の製品について、魅力的な商品説明文を300文字以内で作成してください。

製品：高機能ワイヤレスイヤホン
特徴：ノイズキャンセリング機能、防水性能、バッテリー寿命20時間
ターゲット：音楽好きの若い専門職
\`\`\`

### ステップバイステップ

\`\`\`
以下の数学の問題を解いてください。各ステップを詳しく説明してください。

問題：2次方程式 3x² + 5x - 2 = 0 の解を求めよ。
\`\`\`

### テンプレート完成

\`\`\`
以下のメールテンプレートの空欄を埋めて、丁寧な断りのメールを完成させてください。

件名：【ご依頼について】

〇〇様

お世話になっております。〇〇です。

先日いただきましたお誘いについて、__________。

誠に恐縮ではございますが、__________。

今後ともどうぞよろしくお願いいたします。

敬具
\`\`\`

## プロンプトの最適化

プロンプトを最適化するためのポイント：

1. **具体的に指示する**：曖昧な表現を避け、具体的な指示を与える
2. **制約を設ける**：文字数、形式、トーンなどの制約を明確にする
3. **反復的に改善する**：結果を評価し、プロンプトを調整する
4. **複雑なタスクは分割する**：大きなタスクを小さなステップに分ける

## 実践例

以下は、プロンプトエンジニアリングの実践例です：

\`\`\`javascript
// プロンプトテンプレートを定義
function createPrompt(topic, audience, length) {
  return \`
あなたは専門的なコンテンツライターです。\\n以下のトピックについて、\${audience}向けの記事を書いてください。\\n記事の長さは約\${length}文字にしてください。\\n見出しを適切に使用し、読みやすく構造化してください。

トピック: \${topic}
\`;
}

// プロンプトを生成
const prompt = createPrompt(
  "人工知能の倫理的課題",
  "一般の読者",
  "1000"
);

// APIリクエストを送信（実際のコードでは適切なAPIキーを使用）
async function generateContent(prompt) {
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo-instruct',
      prompt: prompt,
      max_tokens: 1000
    })
  });
  
  const data = await response.json();
  return data.choices[0].text;
}
\`\`\`

この講座を通じて、AIとの効果的なコミュニケーション方法を学び、様々な場面でAIの能力を最大限に引き出すスキルを身につけましょう。
      `,
    },
  }

  // 指定されたコースIDのデータを取得
  const course = mockCourses[courseId]

  // コースが見つからない場合は404エラー
  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 })
  }

  // 遅延をシミュレート
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(course)
}

