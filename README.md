# Express Sample Application 概要

Express 勉強用の Sample Application。

[デモサイト](https://ryu-sato-express-sample-app.herokuapp.com/)

## 利用するフレームワークやプラットフォームへの公式ページリンク

- Express
    - http://expressjs.com/
- Node.js
    - https://nodejs.org/
- Sequelize
    - http://docs.sequelizejs.com/
- React
    - https://reactjs.org/

# 使い方

## 初回起動

動作させるためには、事前に Node.js, Yarn をインストールしておく必要がある。
Windows ユーザが [nodist](https://github.com/marcelklehr/nodist) で Node.js をインストールする場合は、`$ nodist global 8` を実行し、[Yarn](https://yarnpkg.com/lang/ja/docs/install/) はインストーラを実行する。

```shell
$ git clone https://github.com/ryu-sato/express-sample_app.git
$ cd express-sample_app
$ yarn
$ npm run start
```

## 毎回起動

※アプリの修正が行われていない前提。開発者向けの情報は未整備。

```
$ npm run start
```

# DBマイグレーション

## 事前作業

- DB 接続設定を /config/sequelize.js にて行う

## 実施コマンド

```
$ yarn run sequelize db:migrate
$ yarn run sequelize db:seed:all
```

サンプルデータを投入コマンド `db:seed:all` は必要に応じて実施する。

# TODO

- [ ] i18n
- [ ] validation
- [x] React結合
- [x] bootstrap利用
