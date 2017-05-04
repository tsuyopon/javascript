// prototypeプロパティはすべてのFunction()インスタンスに自動的に付与されます。
var myFunction = function(){};
console.log(myFunction.prototype);         // {}
console.log(typeof myFunction.prototype);  // object
