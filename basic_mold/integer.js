// 型比較
var intA = 100;
console.log("typeof intA: " + typeof intA);  // number

var intB = new Number(100);
console.log("typeof intB: " + typeof intB);  // object

var intC = Number(100);     // newなし
console.log("typeof intC: " + typeof intC);  // number

var objA = new Object();
objA.int1 = 100;
console.log("typeof objA.int1: " + typeof objA.int1);  // number

var objB = {
	int1: 100,
}
console.log("typeof objB.int1: " + typeof objB.int1);  // number


