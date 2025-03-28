# Makefile

.PHONY: prisma-generate mig prisma-studio seed dev

# Prisma Client の再生成
prisma-generate:
	npx prisma generate

# マイグレーションの実行（引数 name にマイグレーション名を指定）
mig:
ifndef name
	$(error Please provide a migration name: make prisma-migrate name=MigrationName)
endif
	npx prisma migrate dev --name $(name)

# Prisma Studio の起動
prisma-studio:
	npx prisma studio

# シードデータの投入（prisma/seed.ts の実行例。ts-node等を利用）
seed:
	npx ts-node prisma/seed.ts

# Next.js の開発サーバ起動
dev:
	npm run dev
