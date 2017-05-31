# 概要
Babelを使うとトランスパイルすることができます。

用語的には次を抑えておくことに仕様。
- ES2015はES6と呼ばれる(ES5ではないことに注意!!)。正式名称はES2015らしい。
- ES2016はES7に含まれる

firefoxの資料だがES6に変化したことによって日本語でどのようなことができるようになったのかをざっと俯瞰できる
- https://developer.mozilla.org/ja/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla

# セットアップ
babelというパッケージはbabel-cliというパッケージに変わったので注意が必要です。

次のコマンドで必要なnpmパッケージをインストールします。
```
$ npm install --save-dev babel-cli babel-preset-es2015
```

# 実行方法

es2016を指定するとES6への変換なのでclassなどがファイルに記述されていても変化しませんが、es2015を指定するとclassなどは適切にトランスパイルされます。
```
$ nodejs node_modules/.bin/babel test.js --presets es2015      // for ES6
```

このpresetsの指定は毎回コマンドラインで指定しなくても、.babelrcで常にオプションとして指定することができます。
```
$ nodejs node_modules/.bin/babel xxx.js
```

出力先ファイルを指定するには
```
$ nodejs node_modules/.bin/babel xxx.js --out-file xxx2.js
```

一括で入力させるディレクトリと出力させるディレクトリを指定するには。libはなくても自動的に生成される。
```
$ nodejs node_modules/.bin/babel src --out-dir lib
src/class.js -> lib/class.js
src/const.js -> lib/const.js
src/pow.js -> lib/pow.js
```

一括で入力させるディレクトリを指定して、出力先を1ファイルに集中させたい場合
```
$ babel src --out-file script-compiled.js
```

特定のファイルを無視する場合
```
$ babel src --out-dir lib --ignore spec.js,test.js
```

修正されたことを検知してトランスパイルしたい場合
```
$ babel script.js --watch --out-file script-compiled.js
```

.babelrcを無視して実行する場合
```
$ babel --no-babelrc script.js --presets=es2015,react
```

# その他

### sourceMapについて
- sourcemapファイルを別ファイルとして生成する。
```
$ nodejs node_modules/.bin/babel const.js --out-file hoge.js --source-maps
$ ls hoge*
hoge.js  hoge.js.map
```
- sourcemapをコンパイルしたファイルの中に含める場合
```
$ nodejs node_modules/.bin/babel const.js --out-file hoge.js --source-maps inline
$ ls hoge*
hoge.js
$ grep -i sourcemap hoge.js 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0LmpzIl0 (略)
```


# トラブルシュート
本当はこれだけでうまくうごくはずだが、babelファイルに記述された「#!/usr/bin/env node」のshebangあたりが全く解釈されていないようで
```
$ node_modules/.bin/babel index.js
```

次のように実行すると良いかも
```
$ nodejs node_modules/.bin/babel index.js
```

- 参考
  - http://stackoverflow.com/questions/33509816/what-exactly-does-usr-bin-env-node-do-at-the-beginning-of-node-files
  - https://babeljs.io/docs/usage/cli/
    - babelコマンドラインいろいろ

# ES6参考
- ES6対応シート
  - http://kangax.github.io/compat-table/es6/
- githubでのES6紹介ページ
  - https://github.com/lukehoban/es6features
- 役に立つ資料(ES6を学ぶ上で役に立つリンクが多い)
  - http://azu.github.io/slide/nodejs-es6/how-to-learn.html

# TODO
- この辺をひとめぐりしたい
  - http://postd.cc/es6-cheatsheet/

