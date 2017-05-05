# 概要
Karmaを使ったヘッドレスブラウザテストのサンプル。
ここではヘッドレスブラウザとしてPhantomJSを選択しています。

# 初期セットアップ
次のコマンドを実行してkarma.conf.jsが生成される。
```
$ nodejs node_modules/.bin/karma init
```

続いて設定を少し変更する。filesとbrowserを変更した。
```
$ vim karma.conf.js
-> filesに追加する。
-> browserにPhantomJSを指定する
```

テストを実行するには次のようにします。--single-runを付与しないとプロンプトが戻ってきません。
```
$ nodejs ./node_modules/.bin/karma start --single-run
```
