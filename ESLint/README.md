# 概要
Javascriptには様々な構文チェックツールがありますが、ここではESLintについて
- JSLint
- JSHint
- ESLint
- JSCS

最新版のESLintだとnodejs6.0以降のバージョンが必要となるようだ。

# パッケージインストール
```
$ npm instll eslint
```

# 使い方
```
$ nodejs node_modules/.bin/eslint test.js 

/home/tsuyoshi/git/javascript/ESLint/test.js
  1:16  error  'name' is defined but never used  no-unused-vars
  2:45  error  'nama' is not defined             no-undef

✖ 2 problems (2 errors, 0 warnings)
```

ESLintの設定などを変更するには次の２つのファイルを変更します。
- .eslintrc
- .eslintrc.json


# トラブルシュート
次のエラーがでる場合はnodejsのバージョンを6.0以上に上げる必要がある。が、そんなにすぐには挙げられない(nodeはコンパイルエラーもよく出るし、コンパイルにも時間がかかる)
```
$ nodejs node_modules/.bin/eslint test.js 

/home/tsuyoshi/git/javascript/ESLint/node_modules/eslint/bin/eslint.js:16
const useStdIn = (process.argv.indexOf("--stdin") > -1),
^^^^^
SyntaxError: Use of const in strict mode.
    at Module._compile (module.js:439:25)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:902:3
```

そんなにすぐに挙げられない場合には、
node-v6.10.3-linux-x64.tar.gzなどを公式サイトから取得して展開して次のように「<直接展開したパス>/bin/node」を指定すると実行可能となる。
```
$ ~/node-v6.10.3-linux-x64/bin/node node_modules/.bin/eslint test.js 

/home/tsuyoshi/git/javascript/ESLint/test.js
  1:16  error  'name' is defined but never used  no-unused-vars
  2:45  error  'nama' is not defined             no-undef

✖ 2 problems (2 errors, 0 warnings)
```

# 参考URL
- 公式サイト
  - http://eslint.org/docs/user-guide/getting-started
