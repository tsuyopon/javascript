# 概要
EJSとexpressを一緒に使うサンプルです
EJSはEmbedded Javascriptの頭文字をとったもので、拡張子としては.ejsを利用します。

# 使い方
次のようにすると80番ポートで起動します。
```
$ sudo node server.js
```

あとはブラウザなどでアクセスしてテンプレートエンジンが機能していることを確認します。

# ディレクリ構成について
servers.jsからviews/pages/配下のテンプレートを呼び出します。
views/pages/の中からviews/partials/配下のテンプレートをincludeして呼び出します。

