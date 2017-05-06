# 概要
mocha+chaiを使ったサンプル  

chaiでは次の記法が利用できます。
- should
  - http://chaijs.com/guide/styles/#should
- expect
  - http://chaijs.com/guide/styles/#expect

# 使い方
パッケージをインストールする
```
$ npm install mocha chai
```

あとはテストを実行するのはmochaを実行するだけ
```
$ nodejs node_modules/.bin/mocha 


  libsample
    #calculate
      ✓ should return 2 when the value is 4
      1) should return 1 when the value is 3


  1 passing (16ms)
  1 failing

  1) libsample #calculate should return 1 when the value is 3:

      AssertionError: expected 1.5 to equal 1
      + expected - actual

      -1.5
      +1
      
      at Context.<anonymous> (test/test.js:11:43)

```
