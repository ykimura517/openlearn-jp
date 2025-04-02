// lib/apiClient.ts
import { auth } from './firebase';

/**
 * Firebase Authの現在のユーザーのIDトークンを取得する
 */
async function getIdToken(): Promise<string | null> {
  const user = auth.currentUser;
  return user ? await user.getIdToken() : null;
}

/**
 * URLのパーツを適切に連結する
 */
function joinURL(...parts: string[]): string {
  return parts
    .map((part, index) => {
      if (index === 0) {
        // 先頭は末尾のスラッシュを除去
        return part.replace(/\/+$/, '');
      }
      // 2番目以降は先頭と末尾のスラッシュを除去
      return part.replace(/^\/+|\/+$/g, '');
    })
    .join('/');
}

/**
 * APIリクエストを行うラッパー関数
 * @param endpoint - APIのエンドポイント（base URLは環境変数から取得）
 * @param options - fetchのオプション
 * @param requiresAuth - 認証トークンが必要な場合trueにする
 */

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  requiresAuth: boolean = false
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    throw new Error('APIのBASE URLが設定されていません');
  }
  const url = joinURL(baseUrl, endpoint);

  const headers = new Headers(options.headers);
  if (requiresAuth) {
    const token = await getIdToken();
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
  }

  const res = await fetch(url, {
    ...options,
    headers,
  });

  const data = await res.json();

  if (!res.ok) {
    // レスポンスのbodyに含まれるエラーメッセージがあれば利用する
    const errorMessage =
      data && data.message ? data.message : `APIエラー: ${res.status}`;
    throw new Error(errorMessage);
  }
  return data;
}
