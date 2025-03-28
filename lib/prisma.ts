// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Supabase の接続文字列は .env 内の DATABASE_URL に設定
// （例：postgres://USER:PASSWORD@HOST:PORT/DBNAME）
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
const logLevel =
  process.env.NODE_ENV === 'production'
    ? ['error', 'warn']
    : ['query', 'error', 'warn'];

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: logLevel,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
