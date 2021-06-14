# nuxt-electron-sample

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 課題
* electron-builderで実行ファイルを作成した時に、ファイルが見つからない
  * そもそもindex.htmlはどこに配置されている?
    * ちゃんとコピーされているのか?
  * app.asar配下がルートっぽい

* [ ] 対策1: electronフォルダとnuxtプロジェクトを同階層にする
  https://qiita.com/282Haniwa/items/c051a39ecf4069c9a392