# 概要
Promiseを使うと次のメリットを享受できます。
- 非同期処理を操作できます
- 非同期処理の成功時(resolve)、失敗時(reject)の処理を明示的に記述することができます。
- 非同期処理を平行・直列に実行させることができます。

久しぶりにPromiseを使う場合には記法が複雑なのでPromise bookをざっと見直すことをお勧めします。
- https://azu.github.io/promises-book/

MDNのドキュメントも参考になります
- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - all, allSettled, race, reject, resolveの詳細な説明があります。
  - 最新ではfinallyというのもあるようですが、Nodejs V10以上が必要です。
    - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally


# Promiseをつかわない場合の問題点
非同期処理を使うとネストが深くなる。これをコールバックヘルと呼びます。
```
fs.readFile( 'file1', function ( error, data1 ) {
    // data1から次に読み込むファイル名を求める
    fs.readFile( data1, function ( error, data2 ) {
        // data2から次に読み込むファイル名を求める
        fs.readFile( data2, function ( error, data3 ) {
            // data3を使った処理
        } );
    } );
} );
```

Promiseを使えばネストが深くなることもなく直感的になります。
```
// readFile関数のPromiseを返す関数を作成する
function readFile( ...args ) {
    return new Promise( function ( resolve, reject ) {
        fs.readFile( ...args, function ( error, data ) {
            if ( error ) reject( error );
            else resolve( data );
        } );
    } );
}
 
readFile( 'file1' ).then( function ( data1 ) {
    // data1から次に読み込むファイル名を求める
    return readFile( data1 );
} ).then( function ( data2 ) {
    // data2から次に読み込むファイル名を求める
    return readFile( data2 );
} ).then( function ( data3 ) {
    // data3を使った処理
} ).catch( function ( error ) {
    // いずれかのreadFileでエラーがあった場合の処理
    console.log( error );
} );
```

# 基本概念
- resolve(arg)やreject(arg)で次に飛ぶthenやcatchなどの引数としてargが渡ります
- thenの第２引数としてはreject()時の処理が記述できる。単独で書きたければcatchしてもよい。
```
promise.then(onFulfilled, onRejected)
```

# Promise記法で忘れやすい点

- thenの中でresolve, rejectを記述する。ただ数値や値を返すとresolveと同様
- then内でreturnする値は数値や文字だけでなく、オブジェクトやPromiseオブジェクトもreturnできます。
  - returnした値は Promise.resolve(returnされた値); のように処理されるため、 何をreturnしても最終的には新しいpromiseオブジェクトを返します。
- Promise.resolve(value) という静的メソッドは、 new Promise() のショートカットとなるメソッドです。
```
// Promise.resolve(42); というのは下記のコードのシンタックスシュガーです
new Promise(function(resolve){
    resolve(42);
});
```


# 実行方法
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
