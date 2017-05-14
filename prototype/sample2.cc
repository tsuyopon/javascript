var Constructor = function() {};
Constructor.prototype.a = 'Apple';
Constructor.prototype.b = 'Banana';

var instance = new Constructor();

console.log(Object.getPrototypeOf(instance) == Constructor.prototype);  // true
console.log(instance.a);  // 'Apple';
console.log(instance.b);  // 'Banana';
