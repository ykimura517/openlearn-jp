#!/usr/bin/env python3
import os
import json
import uuid
from pydantic import BaseModel, ValidationError, validator
import psycopg2
import dotenv

dotenv.load_dotenv()


# --- pydanticモデル定義 ---
class CourseMeta(BaseModel):
    id: str
    title: str
    summary: str
    targetAudience: str
    level: str
    difficulty: int
    durationMin: int
    categoryId: str
    prerequisites: str


class Exercise(BaseModel):
    courseArticleId: str
    question: str
    options: list[str]
    correctAnswer: str

    @validator("options", pre=True)
    def parse_options(cls, v):
        # JSON文字列の場合はリストに変換する
        if isinstance(v, str):
            try:
                return json.loads(v)
            except Exception as e:
                raise ValueError(f"optionsのJSONパースに失敗: {v}")
        return v


def main():
    # replace_data.pyのあるディレクトリからの相対パスで、coursesフォルダを探索
    base_dir = os.path.join(os.path.dirname(__file__), "courses")
    if not os.path.isdir(base_dir):
        print(f"コースディレクトリが見つかりません: {base_dir}")
        return
    # DATABASE_URLは環境変数から取得（例: postgresql://user:pass@localhost:5432/dbname）
    db_url = os.environ.get("DATABASE_URL")

    if not db_url:
        print("DATABASE_URLが設定されていません")
        return
    if "dqwyqitfcwth" in db_url:
        raise ValueError("本番のURLではまだやらないでください")
    if "?" in db_url:
        db_url = db_url.split("?")[0]

    # DB接続（psycopg2はデフォルトでトランザクション管理を行います）
    conn = psycopg2.connect(db_url)
    try:
        with conn:
            with conn.cursor() as cur:
                # coursesディレクトリ内の各コースフォルダを処理
                for course_folder in os.listdir(base_dir):
                    course_path = os.path.join(base_dir, course_folder)
                    if not os.path.isdir(course_path):
                        continue

                    # course-meta.jsonの読み込みとバリデーション
                    meta_path = os.path.join(course_path, "course-meta.json")
                    try:
                        with open(meta_path, "r", encoding="utf-8") as f:
                            meta_json = json.load(f)
                        course_meta = CourseMeta(**meta_json)
                    except (FileNotFoundError, ValidationError) as e:
                        print(
                            f"コースメタ情報の読み込みまたはバリデーションエラー({meta_path}): {e}"
                        )
                        continue

                    # course.md（コース詳細記事）の読み込み
                    course_md_path = os.path.join(course_path, "course.md")
                    try:
                        with open(course_md_path, "r", encoding="utf-8") as f:
                            course_description = f.read()
                    except FileNotFoundError as e:
                        print(f"course.mdが見つかりません: {e}")
                        continue

                    # Upsert: コースレコードの挿入または更新
                    cur.execute(
                        """
                        INSERT INTO "MasterCourse" 
                        (id, title, summary, description, "targetAudience", prerequisites, level, difficulty, "durationMin", "categoryId", "createdAt", "updatedAt")
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, NOW(), NOW())
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
                            "updatedAt" = NOW()
                        """,
                        (
                            course_meta.id,
                            course_meta.title,
                            course_meta.summary,
                            course_description,
                            course_meta.targetAudience,
                            course_meta.prerequisites,
                            course_meta.level,
                            course_meta.difficulty,
                            course_meta.durationMin,
                            course_meta.categoryId,
                        ),
                    )

                    # articlesフォルダ内の各記事を処理
                    articles_dir = os.path.join(course_path, "articles")
                    if os.path.isdir(articles_dir):
                        for filename in os.listdir(articles_dir):
                            if filename.endswith(".md"):
                                # ファイル名（例: "0.md"）から連番を取得
                                seq_str = os.path.splitext(filename)[0]
                                try:
                                    sequence = int(seq_str)
                                except ValueError:
                                    print(f"記事ファイル名の連番が不正です: {filename}")
                                    continue

                                # 記事のmarkdownファイルを読み込み
                                article_md_path = os.path.join(articles_dir, filename)
                                try:
                                    with open(
                                        article_md_path, "r", encoding="utf-8"
                                    ) as f:
                                        article_content = f.read()
                                except FileNotFoundError as e:
                                    print(f"記事のmdファイルが見つかりません: {e}")
                                    continue

                                # 記事のIDは courseID と連番を組み合わせて生成
                                article_id = f"{course_meta.id}_{sequence}"
                                # Upsert: 記事レコードの挿入または更新
                                cur.execute(
                                    """
                                    INSERT INTO "MasterCourseArticle" 
                                    (id, "courseId", sequence, title, content, "createdAt", "updatedAt")
                                    VALUES (%s, %s, %s, %s, %s, NOW(), NOW())
                                    ON CONFLICT (id) DO UPDATE SET 
                                        "courseId" = EXCLUDED."courseId",
                                        sequence = EXCLUDED.sequence,
                                        title = EXCLUDED.title,
                                        content = EXCLUDED.content,
                                        "updatedAt" = NOW()
                                    """,
                                    (
                                        article_id,
                                        course_meta.id,
                                        sequence,
                                        "",  # タイトルがない場合は空文字
                                        article_content,
                                    ),
                                )

                                # 演習問題は全削除＆新規作成
                                exercise_json_path = os.path.join(
                                    articles_dir, f"{seq_str}.json"
                                )
                                if os.path.exists(exercise_json_path):
                                    # 既存の演習問題を削除
                                    cur.execute(
                                        'DELETE FROM "MasterCourseArticleExercise" WHERE "courseArticleId" = %s',
                                        (article_id,),
                                    )
                                    try:
                                        with open(
                                            exercise_json_path, "r", encoding="utf-8"
                                        ) as f:
                                            exercises_list = json.load(f)
                                    except Exception as e:
                                        print(
                                            f"演習問題JSONの読み込みエラー({exercise_json_path}): {e}"
                                        )
                                        continue

                                    for ex in exercises_list:
                                        try:
                                            exercise = Exercise(**ex)
                                        except ValidationError as e:
                                            print(
                                                f"演習問題のバリデーションエラー({exercise_json_path}): {e}"
                                            )
                                            continue
                                        # exerciseのIDはUUIDで生成
                                        exercise_id = str(uuid.uuid4())
                                        # ここでは、演習問題は全て選択式（SELECTION）とする
                                        exercise_type = "SELECTION"
                                        cur.execute(
                                            """
                                            INSERT INTO "MasterCourseArticleExercise" 
                                            (id, "courseArticleId", "exerciseType", question, options, "correctAnswer", "createdAt")
                                            VALUES (%s, %s, %s, %s, %s, %s, NOW())
                                            """,
                                            (
                                                exercise_id,
                                                article_id,
                                                exercise_type,
                                                exercise.question,
                                                json.dumps(
                                                    exercise.options, ensure_ascii=False
                                                ),
                                                exercise.correctAnswer,
                                            ),
                                        )
        print("DBのデータ更新に成功しました。")
    except Exception as e:
        print(f"データ登録中にエラーが発生しました: {e}")
        conn.rollback()
    finally:
        conn.close()


if __name__ == "__main__":
    main()
