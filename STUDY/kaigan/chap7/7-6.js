// スコープは関数実行時ではなく関数が定義されたときに決定される。
var parentFunction = function(){
	var foo = 'foo';
	return function(){
		console.log(foo);
	}
}
var foo = 'hoge';

var nestedFunction = parentFunction();
nestedFunction();
