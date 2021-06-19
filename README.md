## プロジェクト構成

```
.
├── electron
│   ├── build         ・・・electron-builderの出力フォルダ
│   ├── dist          ・・・nuxt generateの出力フォルダ
│   ├── node_modules  ・・・electronプロジェクトのモジュール
│   ├── package.json
│   └── src
│       └── main                  ・・・mainプロセス群
└── web
    ├── (Nuxtの規定フォルダ群)
    ├── node_modules  ・・・Nuxtプロジェクトのモジュール
    ├── nuxt.config.js
    ├── package.json
    └── tsconfig.json
```

## インストール

```bash
# electronフォルダ
$ cd electron
$ npm install

# webフォルダ
$ cd web
$ npm install
```

## ビルド

```bash
# Nuxtプロジェクト開発時(webフォルダ)
$ npm run dev
# ↑(ローカルサーバ) + electron開発時(electronフォルダ)
$ npm run dev

# nuxt biuld & generate(webフォルダ)
$ npm run bg

# electron実行(electronフォルダ)
$ npm run start

# electron 実行ファイル作成(Macのみ)
$ npm run build:mac
```
