import os

# 対象ファイルのリスト
files = [
    "../prisma/schema.prisma",
    "../types/api.ts",
    "../contexts/auth-context.tsx",
    "../lib/apiClient.ts",
    "../lib/apiHandler.ts",
    "../sample.env",
    "../app/page.tsx",
    "../app/api/v1/courses/[courseId]/articles/[articleId]/route.ts",
]

# テンプレートファイルのパス（あらかじめ用意されているものとする）
template_file = "prompt-base-template.tmpl"

# テンプレートファイルを読み込み
with open(template_file, "r", encoding="utf-8") as f:
    template = f.read()

# 各対象ファイルに対して、テンプレート内のプレースホルダーを置換する
for file_path in files:
    # テンプレート内のプレースホルダーは、"../" を除いたパスで記述しているものとする
    placeholder = file_path.replace("../", "")
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()
    except Exception as e:
        content = f"ファイルの読み込み中にエラーが発生しました: {e}"
    # 置換する文字列：コードブロックでファイル内容を埋め込む
    replacement = f"```\n{content}\n```"
    template = template.replace(f"{{{{{placeholder}}}}}", replacement)

# 置換結果を "prompt-base.md" として保存
with open("prompt-base.md", "w", encoding="utf-8") as f:
    f.write(template)

print(
    "各プレースホルダーに対応するファイル内容を埋め込んだ 'prompt-base.md' を保存しました。"
)
