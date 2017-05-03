
// thisの位置に応じて呼び出しているオブジェクトが変化していることに注意する。
// つまり、入れ子関数内ではthisはグローバルオブジェクトを参照する。
//  ECMAScript5ではこの苦しい仕様が改善されるらしいですが、このような結果になることは理解しておくに値します

var myObject = {
	func1: function(){
			console.log("###################################1");
			console.log(this);  // myObject
			var func2 = function(){
				console.log("###################################2");
				console.log(this);          // window(global)
				var func3 = function(){
					console.log("###################################3");
					console.log(this);      // window(global)
				}();
			}();
	}
}

myObject.func1();
