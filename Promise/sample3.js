// メソッドチェーンについて理解する
// (1)と(2)の違いを理解する。(1)だとthenブロックの関数が同時にそれぞれ呼ばれるのに対して、(2)のメソッドチェーンの場合だと順番どおりに実行する

var Promise = require('es6-promise').Promise;

// (1): それぞれの `then` は同時に呼び出される
var aPromise = new Promise(function (resolve) {
    resolve(100);
});
aPromise.then(function (value) {
    return value * 2;
});
aPromise.then(function (value) {
    return value * 2;
});
aPromise.then(function (value) {
    console.log("1: " + value); // => 100
})

// vs

// (2): `then` はpromise chain通り順番に呼び出される
var bPromise = new Promise(function (resolve) {
    resolve(100);
});
bPromise.then(function (value) {  // value == 100
    return value * 2;
}).then(function (value) {        // value == 200
    return value * 2;
}).then(function (value) {        // value == 400
    console.log("2: " + value);   // => 100 * 2 * 2
});
