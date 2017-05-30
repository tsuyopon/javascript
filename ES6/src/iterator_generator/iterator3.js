console.log("\n\n関数への引数argumentsがイテラブルであることを確認する");
function func(){
    for(var v of arguments) console.log(v);
}
func(42, "あ", true);


console.log("\n\nTypedArrayがイテラブルであることを確認する");
var view = new Uint8Array([0, 1, -1]);
for(var v of view) console.log(v);


console.log("\n\nMapがイテラブルであることを確認する");
var map = new Map([[0, "Zero"], [{}, "Object"], [[], "Array"]]);
for(var v of map) console.log(v);


console.log("\n\nSetがイテラブルであることを確認する");
var set = new Set([0, {}, []]);
for(var v of set) console.log(v);


// 複数の配列を組み合わせてイテラブルなオブジェクトconnectAryを作成する
console.log("\n\n[...iterable]構文を確認する");
var ary = [0, "A", false];
var str = "あいう";
var connectedAry = [...ary, ...str];
console.log(connectedAry);


console.log("\n\nArray.formを確認する");
var str = "あいう";
var ary = Array.from(str);
console.log(ary); // ["あ", "い", "う"]


console.log("\n\nイテレータを引数に渡す");
var nums = [112, 105, 121, 111];
console.log( Math.max(...nums) ); // 121
console.log( String.fromCharCode(...nums) ); // "piyo"


console.log("\n\n分割代入する");
var [a, b, c] = "ひよこ";
console.log(c+b+a); // "こよひ"


console.log("\n\nイテレータをSetで利用する");
var set = new Set("あいうあお");
console.log(set); // Set {"あ", "い", "う", "お"}


console.log("\n\nイテレータをMapで利用する");
var map = new Map(["A", "B", "C"].entries());
console.log(map); // Map {0 => "A", 1 => "B", 2 => "C"}


