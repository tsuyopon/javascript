//  taskAではresolve()を返し、taskBではreject()を返す。これらはPromise.allに指定されている場合の挙動を理解する。
// taskAとtaskBは並行で実行されているので出力は変わる可能性ありますが今回はsetTimeoutでresolveのほうがrejectよりも遅く実行されるようにしています。
// 出力結果を見るとrejectが実行されるとresolveの方は実行されずにcatchに入ることが確認できます。

// ポイント
//   - 配列に指定されたいずれかのPromiseでrejectが呼び出されたタイミングでcatchメソッドが呼びされ、実行される
//   - catchメソッドが呼びされても終了していないPromiseの処理は継続される
//   - 全てのPromiseの処理が終わってもthenメソッドは呼び出されない

var Promise = require('es6-promise').Promise;
var taskA = new Promise(function(resolve, reject) {
  setTimeout(function () {
    console.log('taskA');
    resolve();
  }, 16);
});

var taskB = new Promise(function(resolve, reject) {
  setTimeout(function () {
    console.log('taskB');
    reject();
  }, 10);
});

var before = new Date();
Promise.all([taskA, taskB]).then(function () {   // ここでPromise.allを実行する
  var after = new Date();
  var result = after.getTime() - before.getTime();
  console.log(result);
}).then(function () {
  console.log('then enter');
}).catch(function () {
  console.log('error enter');
});
