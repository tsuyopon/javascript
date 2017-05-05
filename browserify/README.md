# 概要
Browserifyを使うと、Node.jsと同じCommonJS Modulesで書かれたJavaScriptのファイルをブラウザで利用することができるようになります。
- CommonJS
  - http://www.commonjs.org/

つまり、module.exportやrequireなどの文法で書かれたファイルをブラウザ用に変換することができます。  

メリットを箇条書きで書いておくと、
- ブラウザ上でもNode.js用モジュールを使えるようにする
- ブラウザでもrequire()を使ったモジュール管理を使えるようにする


# 使い方
browserifyをインストールする
```
$ npm install browserify
```

js配下に結合するファイルはすでに配置されているので大元となるjs/main.jsを指定してbundle.jsを作成します。
```
$ node node_modules/.bin/browserify js/main.js -o bundle.js
```

あとはindex.htmlに次の行が記述されているので無事に読み込めることを確認します。
```
<script src="bundle.js"></script>
```

# 参考URL
- browserify公式サイト
  - http://browserify.org/
- browserifyのgithub
  - https://github.com/substack/node-browserify
- CommonJS
  - http://www.commonjs.org/
