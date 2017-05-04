// プロパティが空の値を持っていることを明示するためにはundefinedではなくnullを使うべきです(そもそもundefinedは直接代入するものではない)
// nullというのは今後利用する見込みがあるような場合に使います
var myObjectObject = {foo: null};
console.log(myObjectObject.foo);
