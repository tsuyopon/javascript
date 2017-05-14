/*
// before
var name = 'soarflat';
console.log(name); // => soarflat

name = 'SoarFlat'; // 再代入する
console.log(name); // => SoarFlat

var name = 'SOARFLAT'; // 再宣言をする
console.log(name); // => SOARFLAT
*/

let name = 'soarflat';
console.log(name); // => soarflat

name = 'SoarFlat'; // 再代入する
console.log(name); // => SoarFlat

// letは再宣言が不可能な宣言
let name = 'SOARFLAT'; // 再宣言するとエラーになる
