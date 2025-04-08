#!/usr/bin/env python3
"""
replace_data.py

このスクリプトは、各コースフォルダ内のファイルからコース情報と記事情報、
および記事に紐づく演習問題を一括してDBに登録します。
- コース情報（course‑meta.json と course.md）および記事情報（article‑meta.json と articles/*.md）は
  既存のIDと衝突した場合、更新（upsert）します。
- 演習問題（articles/*.json）は、既存の対象コース記事の演習問題は全削除した上で新規登録します。
削除と新規登録はトランザクション内で実行するため、一部だけが更新されることはありません。

※ 利用前に、環境変数 DATABASE_URL に接続先のDB URL を設定してください。
"""

import os
import json
import psycopg2
from uuid import uuid4
import dotenv

# 環境変数の読み込み
dotenv.load_dotenv()


def get_connection():
    """環境変数 DATABASE_URL からDB接続を取得する"""
    db_url = os.environ.get("DATABASE_URL")
    if not db_url:
        raise Exception("DATABASE_URL environment variable is not set")
    if "?" in db_url:
        # ? 以降のクエリパラメータを削除
        db_url = db_url.split("?")[0]
    return psycopg2.connect(db_url)


def upsert_course(conn, course_meta, course_content):
    """
    MasterCourse テーブルへアップサートする。
    course_meta: course‑meta.json の内容（dict）
    course_content: course.md の内容（文字列）
    """
    upsert_sql = """
    INSERT INTO "MasterCourse" (id, title, summary, description, "targetAudience", prerequisites, level, difficulty, "durationMin", "categoryId", "createdAt", "updatedAt")
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, now(), now())
    ON CONFLICT (id) DO UPDATE SET
         title = EXCLUDED.title,
         summary = EXCLUDED.summary,
         description = EXCLUDED.description,
         "targetAudience" = EXCLUDED."targetAudience",
         prerequisites = EXCLUDED.prerequisites,
         level = EXCLUDED.level,
         difficulty = EXCLUDED.difficulty,
         "durationMin" = EXCLUDED."durationMin",
         "categoryId" = EXCLUDED."categoryId",
         "updatedAt" = now()
    """
    with conn.cursor() as cur:
        cur.execute(
            upsert_sql,
            (
                course_meta["id"],
                course_meta["title"],
                course_meta["summary"],
                course_content,
                course_meta.get("targetAudience"),
                course_meta.get("prerequisites"),
                course_meta["level"],
                course_meta.get("difficulty"),
                course_meta.get("durationMin"),
                course_meta["categoryId"],
            ),
        )


def upsert_article(conn, course_id, article, article_content):
    """
    MasterCourseArticle テーブルへアップサートする。
    article: article-meta.json の1件分の情報（dict）
      ※ article['articleId'] をテーブルの id として使用
    article_content: 各記事のMarkdownファイルの内容（文字列）
    """
    upsert_sql = """
    INSERT INTO "MasterCourseArticle" (id, "courseId", sequence, title, content, "createdAt", "updatedAt")
    VALUES (%s, %s, %s, %s, %s, now(), now())
    ON CONFLICT (id) DO UPDATE SET
      "courseId" = EXCLUDED."courseId",
      sequence = EXCLUDED.sequence,
      title = EXCLUDED.title,
      content = EXCLUDED.content,
      "updatedAt" = now()
    """
    with conn.cursor() as cur:
        cur.execute(
            upsert_sql,
            (
                article["articleId"],
                course_id,
                article["sequence"],
                article["articleName"],
                article_content,
            ),
        )


def replace_exercises(conn, course_article_id, exercises):
    """
    対象のコース記事IDに紐づく演習問題を、一旦全削除した上で新規登録する。
    exercises: JSONファイルから読み込んだリスト
    """
    with conn.cursor() as cur:
        # 既存の演習問題を全削除
        cur.execute(
            'DELETE FROM "MasterCourseArticleExercise" WHERE "courseArticleId" = %s',
            (course_article_id,),
        )
        for ex in exercises:
            ex_id = str(uuid4())
            # options があれば選択式、なければ自由記述と判断
            exercise_type = "SELECTION" if ex.get("options") else "TEXT"
            options = ex.get("options")
            if options and isinstance(options, str):
                try:
                    # 文字列として保持された JSON をパースして再度文字列化（整形）
                    parsed_options = json.loads(options)
                    options_str = json.dumps(parsed_options, ensure_ascii=False)
                except Exception:
                    options_str = options
            else:
                options_str = options
            cur.execute(
                """
                 INSERT INTO "MasterCourseArticleExercise" (id, "courseArticleId", "exerciseType", question, options, "correctAnswer", "createdAt")
                 VALUES (%s, %s, %s, %s, %s, %s, now())
             """,
                (
                    ex_id,
                    course_article_id,
                    exercise_type,
                    ex["question"],
                    options_str,
                    ex.get("correctAnswer"),
                ),
            )


def process_course(course_dir, conn):
    """
    指定されたコースフォルダ内の各種ファイルを読み込み、DBに登録する。
    course_dir: 例）<project_root>/contents/courses/intro-to-llms
    """
    course_meta_file = os.path.join(course_dir, "course-meta.json")
    course_md_file = os.path.join(course_dir, "course.md")
    article_meta_file = os.path.join(course_dir, "article-meta.json")
    if not (
        os.path.exists(course_meta_file)
        and os.path.exists(course_md_file)
        and os.path.exists(article_meta_file)
    ):
        print(f"Missing one or more files in {course_dir}")
        return

    with open(course_meta_file, "r", encoding="utf-8") as f:
        course_meta = json.load(f)
    with open(course_md_file, "r", encoding="utf-8") as f:
        course_content = f.read()
    with open(article_meta_file, "r", encoding="utf-8") as f:
        article_meta = json.load(f)

    # コースとその各記事・演習問題の更新はトランザクションで実行する
    with conn:
        upsert_course(conn, course_meta, course_content)
        for article in article_meta.get("articles", []):
            seq = article["sequence"]
            # 各記事のMarkdownファイルと演習問題のJSONファイルは、記事内の連番（0,1,2…）をファイル名とする
            article_md_file = os.path.join(course_dir, "articles", f"{seq}.md")
            exercise_json_file = os.path.join(course_dir, "articles", f"{seq}.json")
            article_content = ""
            if os.path.exists(article_md_file):
                with open(article_md_file, "r", encoding="utf-8") as f:
                    article_content = f.read()
            upsert_article(conn, course_meta["id"], article, article_content)
            if os.path.exists(exercise_json_file):
                with open(exercise_json_file, "r", encoding="utf-8") as f:
                    exercises = json.load(f)
                replace_exercises(conn, article["articleId"], exercises)
    print(f"Processed course: {course_meta['id']}")


def main():
    """
    エントリーポイント
    コースデータが格納されているフォルダ（同階層の courses ディレクトリ）内の各コースを処理する
    """
    # replace_data.py があるディレクトリからの相対パスで courses フォルダを指定
    base_dir = os.path.join(os.path.dirname(__file__), "courses")
    if not os.path.exists(base_dir):
        print(f"Courses directory not found: {base_dir}")
        return

    try:
        conn = get_connection()
    except Exception as e:
        print(f"Failed to connect to database: {e}")
        return

    try:
        for course_name in os.listdir(base_dir):
            course_path = os.path.join(base_dir, course_name)
            if os.path.isdir(course_path):
                print(f"Processing {course_name}...")
                process_course(course_path, conn)
    finally:
        conn.close()


if __name__ == "__main__":
    main()
