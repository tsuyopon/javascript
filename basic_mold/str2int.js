// pattern1
var strA = "100";
console.log("typeof strA: " + typeof strA);

if(strA == 100)
	console.log("#### strA == 100 true");
if(strA !== 100)
	console.log("#### strA === 100 NOT true");
if(parseInt(strA, 10) === 100)
	console.log("#### parseInt(strA) === 100 true");


// pattern2
var strB = new String("100");
console.log("typeof strB: " + typeof strB);

if(strB == 100)
	console.log("#### strB == 100 true");
if(strB !== 100)
	console.log("#### strB === 100 NOT true");
if(parseInt(strB, 10) == 100)
	console.log("#### parseInt(strB) === 100 true");


// pattern3
var strC = String("100");     // newなし
console.log("typeof strC: " + typeof strC);

if(strC == 100)
	console.log("#### strC == 100 true");
if(strC !== 100)
	console.log("#### strC === 100 NOT true");
if(parseInt(strC, 10) == 100)
	console.log("#### parseInt(strC) === 100 true");


// pattern4
var objA = new Object();
objA.str = "100"
console.log("typeof objA.str: " + typeof objA.str);

if(objA.str == 100)
	console.log("#### objA.str == 100 true");
if(objA.str !== 100)
	console.log("#### objA.str === 100 NOT true");
if(parseInt(objA.str, 10) == 100)
	console.log("#### parseInt(objA.str) === 100 true");


// pattern5
var objB = {
	str: "100"
}
console.log("typeof objB.str: " + typeof objB.str);

if(objB.str == 100)
	console.log("#### objB.str == 100 true");
if(objB.str !== 100)
	console.log("#### objB.str === 100 NOT true");
if(parseInt(objB.str, 10) == 100)
	console.log("#### parseInt(objB.str) === 100 true");



