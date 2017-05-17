// pattern1
var intA = 100;
console.log("typeof intA: " + typeof intA);  // number
if(intA == "100")
    console.log('#### intA == "100" true');
if(intA !== "100")
    console.log('#### intA === "100" **NOT** true');
if(String(intA) === "100")
    console.log('#### String(intA) === 100" true');
if(new String(intA) !== "100")
    console.log('#### new String(intA) === 100" **NOT** true');


// pattern2
var intB = new Number(100);
console.log("typeof intB: " + typeof intB);  // object
if(intB == "100")
    console.log('#### intB == "100" true');
if(intB !== "100")
    console.log('#### intB === "100" **NOT** true');
if(String(intB) === "100")
    console.log('#### String(intB) === 100" true');
if(new String(intB) !== "100")
    console.log('#### new String(intB) === 100" **NOT** true');


// pattern3
var intC = Number(100);     // newなし
console.log("typeof intC: " + typeof intC);  // number
if(intC == "100")
    console.log('#### intC == "100" true');
if(intC !== "100")
    console.log('#### intC === "100" **NOT** true');
if(String(intC) === "100")
    console.log('#### String(intC) === 100" true');
if(new String(intC) !== "100")
    console.log('#### new String(intC) === 100" **NOT** true');


// pattern4
var objA = new Object();
objA.int1 = 100;
console.log("typeof objA.int1: " + typeof objA.int1);  // number
if(objA.int1 == "100")
    console.log('#### objA.int1 == "100" true');
if( objA.int1 !== "100")
    console.log('#### objA.int1 === "100" **NOT** true');
if(String(objA.int1) === "100")
    console.log('#### String(objA.int1) === 100" true');
if(new String(objA.int1) !== "100")
    console.log('#### new String(objA.int1) === 100" **NOT** true');


// pattern5
var objB = {
	int1: 100,
}
console.log("typeof objB.int1: " + typeof objB.int1);  // number
if(objB.int1 == "100")
    console.log('#### objB.int1 == "100" true');
if( objB.int1 !== "100")
    console.log('#### objB.int1 === "100" **NOT** true');
if(String(objB.int1) === "100")
    console.log('#### String(objB.int1) === 100" true');
if(new String(objB.int1) !== "100")
    console.log('#### new String(objB.int1) === 100" **NOT** true');

