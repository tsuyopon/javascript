// new演算子を使ってコンストラクタ関数が呼ばれる場合、その関数内のthisは「これから生成されるオブジェクト」を指す。

var Person = function(name){
	this.name = name || 'john doe';    // このthisはこれから生成されるオブジェクトを指す。
}

var cody = new Person('Cody Lindley');
console.log(cody.name);

var cody2 = new Person();
console.log(cody2.name);
