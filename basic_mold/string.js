// 型比較
var strA = "hoge";
console.log("typeof strA: " + typeof strA);  // string

var strB = new String("hoge");
console.log("typeof strB: " + typeof strB);  // object

var strC = String("hoge");     // newなし
console.log("typeof strC: " + typeof strC);  // string

var objA = new Object();
objA.str = "hoge"
console.log("typeof objA.str: " + typeof objA.str);  // string

var objB = {
	str: "hoge"
}
console.log("typeof objB.str: " + typeof objB.str);  // string


