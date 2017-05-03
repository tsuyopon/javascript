// 変数の参照について


// pattern1
// console.log(say)はどのようにsay変数を探索するのか?
//   1. func2から変数が定義されていないかどうかを確認する
//   2. func2の親関数func1で変数が定義されていないかどうかを確認する
//   3. グローバルスコープで変数がテギされていないかどうかを確認する
var say = "kyukyu";
var func1 = function(){
	var func2 = function(){
		console.log(say);
	}();
}();

// pattern2
var x = 10;
var y = 10;
var z = 10;
var foo = function(){
	var y = 20;
	var bar = function(){
		var z = 30;
		console.log(z + y + x);  // zはローカルスコープ、x, zはスコープチェーン(xはグローバル)から発見
	}();
};
foo();    // グローバルのyとzはつかわれていない
