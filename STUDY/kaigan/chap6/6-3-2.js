// thisが無名関数経由で渡された場合について
var foo = {
	func1: function(bar){
			bar();                          // 8行目で渡した無名関数が実行される。thisはfooオブジェクトではなくグローバルオブジェクトを指す
			console.log("ZZZZZZZZ"+this);   // このthisはfooオブジェクトへの参照
	}
}

foo.func1( function(){console.log(this);} );  //  無名関数を引数として渡して実行する。
