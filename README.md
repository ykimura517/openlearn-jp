## local起動方法
```
npm run dev
```
or
```
make dev
```
## prisma関連
### Prisma Client の再生成
make pgen

### migration実行
make mig

### seedデータ投入
make seed

### DB初期化
make reset


## 注意
localとstagingはfirebase認証を共有しています。
一方で、RDBはローカルでは独自にコンテナを立てています。
stagingとprodはそれぞれsupabaseを使っています。