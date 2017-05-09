// Promiseの最小サンプル
// 手順としては
//   1. new Promiseを実行する。
//   2. 成功時としてresolveをコールする
//   3. resolveが呼ばれるとthenが呼ばれる。(rejectの場合だとcatchが呼ばれる)

var Promise = require('es6-promise').Promise;
function asyncFunction() {

    // Promiseオブジェクトを返却する.処理成功時にはresolveが呼ばれる
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 成功
            resolve('Async Hello world');   // ここでresolveをコールしています。
        }, 1000);
    }); 
}

asyncFunction().then(function (value) {
    // 非同期処理成功
    console.log(value);    // => 'Async Hello world'
}).catch(function (error) {
    // 非同期処理失敗。呼ばれない
    console.log(error);
});

console.log('Sync 1');
