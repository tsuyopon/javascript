# 概要
sassを使った最低限のサンプル

# セットアップ
次のコマンドでインストール
```
$ npm install node-sass
```

scssをコンパイルする
```
$ nodejs node_modules/.bin/node-sass static/scss/style.scss build.css
Rendering Complete, saving .css file...
Wrote CSS to /home/tsuyoshi/git/javascript/node-sass/build.css
```

ビルド前はこちら
```
$ cat static/scss/style.scss 
$my-color: #3d3d3d;

body {
	color: $my-color;
}
```

生成されたものを確認してみる
```
$ cat build.css 
body {
  color: #3d3d3d; }
```

# MEMO
- ファイルを更新したら自動コンパイルする
```
node-sass test.scss test.css -w
```
- 本番公開時に圧縮コンパイルする場合
```
$ node-sass test.scss test.css --output-style compressed
```

# 参考URL
- https://github.com/sass/node-sass

