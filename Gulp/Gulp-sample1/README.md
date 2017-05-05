# 概要
gulpサンプル
これを基本としてあとはプラグインをインストールしてgulpfile.jsにレシピ的なものを追加していくだけ..

# 使ってみる
まずはgulpをインストールします。
```
$ npm install gulp
```

今回はsassを組み合わせるのでgulp-sassをインストールします。これは裏側ではnode-sassを利用しています。
```
$ npm install gulp-sass
```

すでにgulpfile.jsが存在すると思うのでこれを使ってgulp経由でsassをコンパイルします。
```
$ nodejs node_modules/.bin/gulp sass
[06:00:25] Using gulpfile ~/git/javascript/Gulp/gulpfile.js
[06:00:25] Starting 'sass'...
[06:00:25] Finished 'sass' after 8.46 ms
```

上記を実行するとcssというディレクトリが生成されていて、その中にsassファイルからcssに変換されたファイルが配置されています。

# 参考URL
- https://liginc.co.jp/web/tutorial/117900
