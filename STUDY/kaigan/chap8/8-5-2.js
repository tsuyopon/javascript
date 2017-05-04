Array.prototype.foo = 'foo';
var myArray = new Array();
console.log(myArray.constructor.prototype.foo);   // foo
console.log(myArray.foo);                         // foo
