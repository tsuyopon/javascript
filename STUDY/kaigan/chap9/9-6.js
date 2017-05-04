// 要素の追加と変更を行う
var myArray = [];                         // 空の配列を生成
myArray[50] = 'blue';                     // 0-49にはundefinedが格納される

console.log(myArray.length);              // 51

myArray.unshift('unshifted');             // 配列の先頭に要素を追加する
console.log(myArray.length, myArray[0]);

myArray.push('pushed');
console.log(myArray.length, myArray[52]);
