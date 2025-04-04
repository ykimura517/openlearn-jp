// app/contact/route.ts

import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { base64Decode } from '@/lib/utils';

// 環境変数から設定を取得
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const PRIVATE_KEY = base64Decode(
  process.env.GOOGLE_SHEETS_PRIVATE_KEY_BASE64 as string
);

if (!CLIENT_EMAIL || !PRIVATE_KEY || !SPREADSHEET_ID) {
  throw new Error('Google Sheets API の環境変数が正しく設定されていません。');
}

// サービスアカウント認証
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'すべてのフィールドを入力してください。' },
        { status: 400 }
      );
    }

    // データをGoogle Sheetsに追加
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'contact!A:D', // シート名と範囲を指定
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[new Date().toISOString(), name, email, message]],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error writing to Google Sheets:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。後ほど再試行してください。' },
      { status: 500 }
    );
  }
}
