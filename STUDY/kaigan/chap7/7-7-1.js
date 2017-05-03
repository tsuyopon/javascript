// スコープチェーン上の変数にアクセスする
var countUp = function(){
	var count =0;
	return function(){
		return ++count;
	}
}();

console.log(countUp());  // 1
console.log(countUp());  // 2
console.log(countUp());  // 3
