// 配列を表示する
console.log("\ndisplay array");
var obj = ["A", "B", "C"]; // イテラブルなオブジェクト
for(var v of obj) console.log(v);


// 確認
console.log("\n\ncheck typeof");
var obj = ["A", "B", "C"]; // イテラブルなオブジェクト
var iterator = obj[Symbol.iterator]();
console.log(typeof iterator); // "object"。確かにイテレータを取得できている
console.log(iterator.next()); // { value: "A", done: false }

// 配列には.keysメソッドがある
console.log("\n\n.keys method check");
var obj = ["A", "B", "C"]; // イテラブルなオブジェクト
for(var v of obj.keys()) console.log(v);

// 配列には.keysメソッドがある
console.log("\n\n.entries method check");
var obj = ["A", "B", "C"]; // イテラブルなオブジェクト
for(var v of obj.entries()) console.log(v);

// 文字列
console.log("\n\n文字列を1文字ずつ表示する");
var str = "あいう";
for(var v of str) console.log(v);

// Symbol.iterator
console.log("\n\n[Symbol.iterator]() メソッドを実行して自分自身を返す");
var obj = ["A", "B", "C"];             // イテラブルなオブジェクト
var iterator = obj[Symbol.iterator](); // イテレータを取得する
for(var v of iterator) console.log(v); // for-of にイテレータを渡す
