# javascript

実行方法は対象のディレクトリにcdして、nodejsコマンド(or nodeコマンド)を実行する
```
$ npm install
$ nodejs  xxxx.js
```

# MEMO(karma.conf.jsやgulpなどの記述方法)
- sass/style.scss
  - sass/style.scssだけヒット
- sass/*.scss
  - sassディレクトリ直下にあるscssがヒット
- sass/**/*.scss
  - sassディレクトリ以下にあるすべてのscssがヒット
- ["sass/**/.scss","!sass/sample/**/*.scss"]
  - sass/sample以下にあるscssを除くsassディレクトリ以下のscssがヒット

# 参考URL
- 何の機能がどのブラウザバージョン以降で利用できるのかを調べるのにすごい便利なサイト
  - http://caniuse.com/
