# javascript
このレポジトリはjavascriptに関するレポジトリです。
主にnodejsで動作確認をおこなっています。


# 詳細
### このレポジトリの実行方法
実行方法は対象のディレクトリにcdして、nodejsコマンド(or nodeコマンド)を実行する。
package.jsonがディレクトリ直下に配置してあるので、基本的には以下のコマンドを実行すればOKです。
```
$ npm install
$ nodejs  xxxx.js
```

### npmやnodejs自体のインストール
npmやnodejsコマンド自体がインストールされていない場合にはパッケージをインストールする必要があります。
Cent0S7環境では以下のコマンドでインストールしました。

レポジトリを追加
```
$ curl -sL https://rpm.nodesource.com/setup_8.x | sudo bash -
```

パッケージインストール
```
$ sudo yum install nodejs
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
