// lengthを操作して配列の要素の追加・削除を行う
var myArray = ['blue', 'green', 'orange', 'red'];
console.log(myArray.length);  // 4
myArray.length=99;
console.log(myArray.length);  // 99

myArray.length = 1;           // インデックス1以降の要素はすべて削除される
console.log(myArray[1]);      // undefined
console.log(myArray);         // [ 'blue' ]

