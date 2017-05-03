var foo = 'bar';
var myApp = function(){
	var run = function(){
		console.log(foo);
	}();
}
myApp();
console.log(foo);
