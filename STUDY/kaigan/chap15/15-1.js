// undefinedが出る場合を理解する。
// undefinedについてはプログラマーから利用するのを避けて、nullを使うのが望ましい。

// 値を代入せずに変数を宣言した場合
var initializedVariable; 
console.log(initializedVariable);
console.log(typeof initializedVariable);

// 特定のオブジェクトを宣言して、その中のプロパティを確認する場合
var foo = {};
console.log(foo.bar);
console.log(typeof foo.bar);
