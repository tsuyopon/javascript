// Promiseをネストした時のサンプルプログラム(nest1_1.jsとnest1_2.jsを比較すること)

var Promise = require('es6-promise').Promise;

// asyncFunctionとasyncFunctionFailedの違いはresolveを返すかrejectを返すか
function asyncFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async Resolve Hello world');
        }, 1000);
    }); 
}

function asyncFunctionFailed() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // Failed
            reject(new Error('this is error in asyncFunctionFailed'));
        }, 1000);
    }); 
}

asyncFunction().then(function (value) {
    // 非同期処理成功
    console.log(value);    // => 'Async Hello world'
    asyncFunctionFailed().then(function (value) {
        console.log("Nest Successed");
    }).catch(function (error) {
        console.log("Nest Child: " + error);

        // ここでrejectを返すと上位のcatchには補足されない(catchの中でやっているのでどこにも補足されない)
        return new Promise(function (resolve, reject) {
            reject("Error2");
        });
    });

}).catch(function (error) {
    // 非同期処理失敗。呼ばれない
    console.log("Nest Parent: " + error);
});

console.log('Sync 1');
