// プロトタイプチェーンを理解する。
// 次の例だと myArray > Array > Objectで探索する
Object.prototype.foo = 'object-foo';
Array.prototype.foo = 'array-foo';

var myArray = [];
console.log(myArray.foo);   // array-foo

myArray.foo = 'bar';
console.log(myArray.foo);   // bar
