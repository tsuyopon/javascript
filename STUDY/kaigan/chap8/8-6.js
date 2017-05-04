// プロトタイプチェーンの最後はObject.prototypeを参照することを理解する
var myArray = [];
console.log(myArray.foo); // undefined

Object.prototype.foo = 'foo';
console.log(myArray.foo);       // foo
