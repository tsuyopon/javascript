# 概要 
power-assert + mochaについて

# 詳細
package.jsonに以下の行が追加されていればtestディレクトリにテストがあると判断する。
```
  "directories": {
    "test": "test"
  }, 
```

そして下記コマンドを実行するだけでテストしてくれます。
```
$ npm run test
```

# 参考URL
- https://github.com/power-assert-js/power-assert
- https://github.com/power-assert-js/intelli-espower-loader
  - Node module
