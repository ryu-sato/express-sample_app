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

# 動作環境

Node.js, npm, Yarn は package.json の engines 記載の version を使うこと。

尚、別途 Node.js, npm バージョン管理ツールのために .node-version, .npm-version ファイルを用意している。
(記述されているバージョンは package.json の engines と同じ)

# 開発スタートアップ

## 開発環境構築

動作させるためには、事前に Node.js, Yarn をインストールしておく必要がある。
Windows ユーザが [nodist](https://github.com/marcelklehr/nodist) で Node.js をインストールする場合は、`$ nodist global 8` を実行し、[Yarn](https://yarnpkg.com/lang/ja/docs/install/) はインストーラを実行する。

* リポジトリからコードを clone する
    ```shell
    $ git clone https://github.com/ryu-sato/express-sample_app.git
    $ cd express-sample_app
    ```
* 依存関係を解消する
    ```shell
    $ yarn
    ```
* "DBマイグレーション" の項目を参照してマイグレーションを行う

## 毎回起動

```
$ npm run build:dev
$ npm run server:dev
```

上記コマンドを実行すると、コードの変更を watch する待機状態となるため、それぞれ別ターミナルで実行すること。

# DBマイグレーション

マイグレーションファイルが追加される都度実行すること。

## 事前作業

- `/config/sequelize.js` にてDB 接続設定を記述する

## 実施コマンド

```
$ yarn run sequelize db:migrate
$ yarn run sequelize db:seed:all
```

サンプルデータの投入コマンド `db:seed:all` は必要に応じて実施する。

# TODO

- [ ] i18n
- [ ] validation
