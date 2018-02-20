# Express Sample Application 概要

Express 勉強用の Sample Application。

## 利用するフレームワークやプラットフォームへの公式ページリンク

- Express
    - http://expressjs.com/
- Node.js
    - https://nodejs.org/

# 使い方

動作させるためには、事前に Node.js, Yarn をインストールしておく必要がある。
Windows ユーザが [nodist](https://github.com/marcelklehr/nodist) で Node.js をインストールする場合は、`% nodist global 8` を実行し、[Yarn](https://yarnpkg.com/lang/ja/docs/install/) はインストーラを実行する。

```cmd
> git clone https://github.com/ryu-sato/express-sample_app.git
> cd express-sample_app
> yarn
> set DEBUG=app:* & npm start
```

# TODO

- [ ] i18n
- [ ] validation
- [x] React結合
- [ ] bootstrap利用