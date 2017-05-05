# 概要
webpackについて

# インストール
最新版のnodeを使って下さい
```
$ npm install webpack
```

# 実行してみる
main.jsからprint.jsがrequireされているので大元のmain.jsだけを入力で指定します。
出力名はbundle.jsとして指定しています。
```
$ node node_modules/.bin/webpack main.js bundle.js
Hash: 1abc1c7e81e17195728f
Version: webpack 2.5.0
Time: 109ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.84 kB       0  [emitted]  main
   [0] ./src/print.js 71 bytes {0} [built]
   [1] ./src/main.js 56 bytes {0} [built]
$ ls bundle.js 
bundle.js
```

今回はwebpack.config.jsがあるのでその中で入力先と出力先を指定しています。  
入力先はsrc/main.js、出力先はtmp/output.jsとなります。tmpディレクトリは自動的に生成されます。
```
$ node node_modules/.bin/webpack
```

package.jsonのscript部にもwebpack用の処理を追加しています。


# 参考URL
- http://webpack.github.io/
