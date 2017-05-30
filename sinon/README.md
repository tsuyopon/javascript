# 概要
JavaScriptでスパイ、スタブ、モックなどのテストダブルを行ないたい場合にはsinonが利用できる。

- スパイ
  - 関数がどのように呼び出されたかを記録する
- スタブ
  - 関数の戻り値をあらかじめ設定し、その結果でテストを行う
- モック
  - 実行前に関数の実行回数など期待する結果を指定しておく
- フェイク
  - 問い合わせるDBやサーバ処理などを単純な実装に置き換える

### sinonの使い方
2種類の使い方があります。ここではサーバの場合について記述します。
- サーバの場合
```
$ npm install sinon
$ vim xxx.js
var sinon = require('sinon');    // これを加えること
```
- ブラウザの場合
```
$ npm install sinon
$ vim xxx.html                   // sinon.jsを読み込むように追加すること
```

あとはただnodeコマンドを対象に対して実行すればOK
```
$ node xxx.js
```

# sinonの公式サイトのサンプルを参考にする
次のコマンドでセットアップする
```
$ git clone https://github.com/sinonjs/sinon    // 試したときのハッシュ値は64d51bef80b20bcab4559aad94e6221d64120d52
$ cd sinon
$ npm install
```

インストールが終わり次第、testディレクトリ中のコマンドは次のコマンドでテストを実行することができます。
```
$ npm run test
```

# URL
- 公式URL
  - http://sinonjs.org/

# TODO
まだいろいろ追加したい
