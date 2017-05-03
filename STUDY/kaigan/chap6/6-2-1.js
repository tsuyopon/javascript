// 

var foo = 'foo';
var myObject = { foo: 'this is myObject' };
var say = function(){
	console.log(this['foo']);
};

// part1
myObject.say = say;
myObject.say();       // this is myObject

// part2
this.foo = 'hoge';
this.say = say;
this.say();           // hoge

// part3
say();                // undefined
