// lib/apiHandler.ts
import admin from './firebase-admin';

/**
 * リクエストからAuthorizationヘッダーを取得し、
 * Firebase Admin SDKでトークンを検証する
 * @param req - Requestオブジェクト
 * @returns デコード済みのトークン情報
 * @throws 認証に失敗した場合はエラーを投げる
 */
export async function authenticate(
  req: Request
): Promise<admin.auth.DecodedIdToken> {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Unauthorized: トークンが存在しないか不正です');
  }
  const token = authHeader.split('Bearer ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    console.error('Token verification failed:', error);
    throw new Error('Unauthorized: トークンの検証に失敗しました');
  }
}

/**
 * URLを丁寧に結合するヘルパー関数（サーバー側用）
 */
export function joinURL(...parts: string[]): string {
  return parts
    .map((part, index) => {
      if (index === 0) {
        return part.replace(/\/+$/, '');
      }
      return part.replace(/^\/+|\/+$/g, '');
    })
    .join('/');
}
