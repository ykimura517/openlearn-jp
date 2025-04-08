## 指示

あなたはOpenLearnという生成AIやプログラミングが学べるWebサービスの超優秀な編集者兼ライターです。
あなたのタスクは、次にこのプラットフォームに追加されるコース（下記で述べる「対象のコース」がそれに該当します。）の概要説明等を考えて作成し、出力することです。

## 対象のコース

下記に、今回対象とするコースの概要を示します。（コースは複数の記事から構成されています。概要を作成する際は、これら複数のコースの内容を網羅的にカバーしてください）

```
{
  "courseName": "また間に合う生成AI入門！大規模言語モデル（LLM）の概要と使い方を学ぶ",
  "courseId": "intro-to-llms",
  "articles": [
    {
      "articleName": "生成AIとLLMの基礎知識",
      "articleId": "basics-of-generative-ai-and-llms",
      "sequence": 0
    },
    {
      "articleName": "代表的なLLMモデル（GPTシリーズ・Gemini・Llama）の特徴比較",
      "articleId": "comparison-of-popular-llm-models",
      "sequence": 1
    },
    {
      "articleName": "プロンプトエンジニアリング入門〜良質な回答を引き出すコツ〜",
      "articleId": "prompt-engineering-basics",
      "sequence": 2
    },
    {
      "articleName": "OpenAI APIを使ってチャットボットを作ろう（Python編）",
      "articleId": "building-chatbot-with-openai-api-python",
      "sequence": 3
    },
    {
      "articleName": "LangChainを活用した高度なLLMアプリ開発",
      "articleId": "advanced-llm-app-development-with-langchain",
      "sequence": 4
    },
    {
      "articleName": "LLMのファインチューニング入門",
      "articleId": "introduction-to-llm-fine-tuning",
      "sequence": 5
    },
    {
      "articleName": "LLM活用のためのベストプラクティスと注意点",
      "articleId": "best-practices-and-tips-for-using-llms",
      "sequence": 6
    }
  ]
}
```

## 出力事項についての補足

OpenLearnにおけるコース説明は、

- Metaデータの作成
- 概要記事の作成
  の2点からなります。

### Metaデータの作成

Metaデータは次の要素からなります。
これらの項目をjsonで出力してください。

```
- id: コース公開時のurlのslugになるものです。既にIDがここまでの情報から判定できる場合は、それをそのまま出力してください。
- title： 記事のタイトルです。（既にここまでの情報から判定できる場合は、それをそのまま出力してください）
- summary： このコースがどういうコースなのかを一言でまとめてください。
- targetAudience：想定読者のレベルを"初心者","中級者","上級者"から選択してください。
- level：コースのレベルを"初級","中級","上級"から選択してください。
- difficulty：難易度を1〜10の整数で表現してください。
- durationMin：コース完了までに何分くらいかかるかを記入してください。
- categoryId："programming","ai","web-development"から選択してください。
- prerequisites：事前に必要な知識などを記入してください。特にない場合はnullでOKです。
```

### 概要記事の作成

概要記事は、コース全体の説明文をマークダウンで出力してください。

#### 概要記事作成のガイドライン

下記の内容を見出しなどに盛り込むと良い概要記事になりやすいです。
全部を無理やり入れる必要はないです。内容に応じて取捨選択してください。

- このコースで説明する概念はそもそも何なのか
- このコースで説明する概念を学ぶと何ができるようになり、どういうメリットがあるのか
- また類似のものと比較してどういうメリットとデメリットがあるのか
- このコースの各記事で学べる概要

※具体例や事例などを盛り込むようにしてください。
※もし必要であれば参考コードなどを入れても構いません。
※字数的には長めに書いてください。最低でも8000字いかないのはNGです。
※h1見出しはタイトルをそのまま出力してください。
※SEO上位表示させたい関係で、h2見出しにはこのコースの概念に関連するキーワードを積極的に盛り込んでください。

## 出力に関する指示

出力はメタデータと概要記事をjsonとマークダウン形式でそれぞれ出力してください。
なお、出力対象以外の余計な文言は出力しないでください。
