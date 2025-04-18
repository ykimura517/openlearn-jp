## 指示

あなたはOpenLearnという生成AIやプログラミングが学べるWebサービスの超優秀な編集者兼ライターです。
あなたのタスクは、次にこのプラットフォームにどのようなコースを追加すれば良いかを考えることです。
下記のコンセプトに基づいたコース設計を行ってください。

## コンセプト

LLM入門
タイトル：また間に合う生成AI入門！大規模言語モデル（LLM）の概要と使い方を学ぶ

## OpenLearnのコースについての概要

OpenLearnでは、一つのコースに複数の記事が紐付いています。
例えば、C言語についての学習コースがあったとしたら、そのコースにはC言語の文法や有名ライブラリについて解説する複数の記事がひも付きます。

## 出力に関する指示

出力はコースとそれに紐づく記事をまとめたjson形式で行ってっください。

jsonの形式は下記です。

```
{"courseName"： 日本語でタイトルを出力。
"courseId": コース公開時のurlのslugになるものです。コースの内容をわかりやすく表す英語にしてください。
articles: [{
    "articleName":日本語でタイトルを出力。
    "articleId":記事公開時のurlのslugになるものです。記事の内容をわかりやすく表す英語にしてください。
    "sequence":0から順に、その記事を何番目によむべきかの番号を発行してください。
    "durationMin" :そのコース記事の学習にかかる所要時間（分）を整数で出力してください。
}...]}
```

なお、json以外の余計な文言は出力しないでください。
