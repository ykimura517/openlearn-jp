# Makefile

.PHONY: pgen mig prisma-studio seed dev reset

# Prisma Client の再生成
pgen:
	npx prisma generate

# マイグレーションの実行（引数 name にマイグレーション名を指定）
mig:
	npx prisma migrate dev

# Prisma Studio の起動
prisma-studio:
	npx prisma studio

# シードデータの投入（prisma/seed.ts の実行例。ts-node等を利用）
# npx prisma db seed
seed:
	npx ts-node prisma/seed.ts

# Next.js の開発サーバ起動
dev:
	npm run dev
reset:
	npx prisma migrate reset