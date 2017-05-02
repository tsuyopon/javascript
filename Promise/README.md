# 概要
Promiseテスト用

次のコマンドで実行することが可能
```
$ npm install
$ nodejs <xxxx>.js
```




# トラブルシュート
次のエラーが出る。
```
$ nodejs promise.js

/home/tsuyoshi/git/javascript/Promise/promise.js:3
  return new promise(function(resolve) {
             ^
ReferenceError: promise is not defined
    at p (/home/tsuyoshi/git/javascript/Promise/promise.js:3:14)
    at Object.<anonymous> (/home/tsuyoshi/git/javascript/Promise/promise.js:10:1)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:902:3
```

こちらに従って
- http://stackoverflow.com/questions/35639924/why-would-i-get-a-promise-is-not-defined-error-on-node-v5-7-0

```
$ npm install es6-promise@3.1.2
```

コードに以下を追加したら解決する
```
var Promise = require('es6-promise').Promise;
```
