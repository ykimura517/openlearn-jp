import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Unicode文字列をBase64エンコードする関数
 * @param str - エンコードする文字列
 * @returns Base64エンコードされた文字列
 */
export function base64Encode(str: string): string {
  // UTF-8にエンコード
  const utf8Bytes = new TextEncoder().encode(str);
  // バイナリ文字列に変換
  let binary = '';
  utf8Bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  // Base64エンコード
  return btoa(binary);
}

/**
 * Base64エンコードされた文字列をデコードする関数
 * @param base64 - デコードするBase64文字列
 * @returns デコードされた文字列
 */
export function base64Decode(base64: string): string {
  // Base64デコードしてバイナリ文字列に変換
  const binary = atob(base64);
  // バイナリ文字列をUint8Arrayに変換
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  // UTF-8デコード
  return new TextDecoder().decode(bytes);
}
