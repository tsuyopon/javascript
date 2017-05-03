// varを定義しない場合は関数内で定義されていてもグローバルスコープで定義される。
// 関数内で定義したい場合には必ず変数定義の際にvarを使うようにすると良い。

var foo = function(){
	var bar= function(){
		hoge = 2;        // varは付与されていない
		var fuga = 2;    // varを付与
	}();
}();

console.log(hoge);
console.log(fuga);    // 参照できない。この行でjavascriptのエラーが発生する
