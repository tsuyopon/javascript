// varをつけた場合とvarをつけない場合でdeleteできる場合とできない場合があるので注意すること

var a = 10;   // グローバル変数(JavascriptはDontDelete属性を持ったプロパティが追加される)
b = 100;      // グローバルプロパティ(DontDelete属性が付与されない)
delete a;     // aはdeleteだと削除できない
delete b;     // bはdeleteで削除できる

console.log(a);  // aはdeleteで消すことができないので、出力される
console.log(b);  // bはすでに存在しないのでエラーが発生する
