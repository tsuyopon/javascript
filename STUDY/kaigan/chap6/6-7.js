// prototypeメソッド内に記述されたthisは生成されるインスタンスを参照します。

var Person = function(x) {
	if(x) { this.fullName = x; };
};

// prototypeメソッド内のthisは生成されるインスタンスを参照します。
Person.prototype.whatIsMyFullName = function(){
	return this.fullName;
}

var cody = new Person('cody lindley');
var lisa = new Person('lisa lindley');
console.log(cody.whatIsMyFullName(), lisa.whatIsMyFullName());

// プロトタイプチェーンで参照されるパターン
Object.prototype.fullName = 'John Doe';   // Object.prototypeに追加していることに着目
var john = new Person();                  // Personには引数が渡されていないのでfullNameは設定されない。
console.log(john.whatIsMyFullName());     // プロトタイプチェーンを辿って(つまり、Person.prototype.fullNameを見て、その後Object.prototype.fullNameから見つけます)
