// 6-6-1.jsのnew演算子を使っていない版

var Person = function(name){
	this.name = name || 'john doe';    // このthisはこれから生成されるオブジェクトを指す。
}

var cody = Person('Cody Lindley');     // 6-6-1.jsと異なり、new演算子を利用していない

console.log(name);
console.log(cody.name);                // new定義していないのでcody.nameはundefinedとなるのでここでエラーが発生する。

