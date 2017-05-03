// 変数には「グローバルスコープ」、「ローカルスコープ」、「evalスコープ」の３つがある。
var foo = 0;
console.log(foo);   // 0

var myFunction = function(){

	var foo = 1;
	console.log(foo);   // 1

	var myNestedFunction = function(){
		var foo = 2;
		console.log(foo);  // 2
	}();

	var myNestedFunctionTwo = function(){
		console.log(foo);  // 1
	}()
}();

eval('var foo = 3; console.log(foo);');   // 3
