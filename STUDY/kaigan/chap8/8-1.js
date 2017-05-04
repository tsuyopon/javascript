
var myArray = new Array('foo', 'bar');
console.log(myArray.join());              // joinメソッドを定義していないのに実行できるのはArray.prototypeで発見したjoinメソッドがあるからです。

