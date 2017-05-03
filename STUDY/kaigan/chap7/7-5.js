// スコープチェーン中で最初に発見した目的の値が探しだしたらそれ以上は探索しない
var x = false;
console.log("globalscope: "+x);
var foo = function(){
	var x = false;
	console.log("foo scope: "+x);
	bar = function(){
		var x = true;
		console.log("bar scope: "+x);
	}();
}

foo();
