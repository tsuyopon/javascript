// 入れ子関数内でthisを見失うバグ(6-3.js)問題をスコープチェーンを使って回避する。
var myObject = {
	myProperty: 'I can see the light',
	myMethod: function(){
		var that = this;        // *** this(myObject)への参照をmyMethodスコープに保持させる)
		var helperFunction = function(){    // ネストされた子関数
			console.log("AAAAAAAAA"+that);  // ネストされた関数内ではthatを用いる。
			console.log("BBBBBBBBB"+this);  // グローバルプロパティ(本来はthisはmyObjectであって欲しいがECMAScript5未満の苦しい仕様)
		}();
	}
}

myObject.myMethod();
