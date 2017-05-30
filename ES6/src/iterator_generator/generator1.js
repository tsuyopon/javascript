// ジェネレータを使わない書き方
var ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for(var num of ary) console.log(num);

// ジェネレータを使う書き方
// ジェネレータの特徴２つ
//   1. function* gfn(from, to){ while(from <= to) yield from++; } のようにしてfunctionのあとに*が付与されて宣言される。
//   2. yield 及び yield* を使うことができる
console.log("\n\nジェネレータを使って書く");
function* gfn(from, to){ while(from <= to) yield from++; }
var g = gfn(1, 20);
for(var num of g) console.log(num);
