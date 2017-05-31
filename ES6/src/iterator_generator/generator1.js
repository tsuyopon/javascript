// ジェネレータを使わない書き方
var ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for(var num of ary) console.log(num);

// ジェネレータを使う書き方(スマートにかけるようになる)
// 
// ジェネレータの特徴２つ
//   1. function* gfn(from, to){ while(from <= to) yield from++; } のようにしてfunctionのあとに*が付与されて宣言される。
//   2. yield 及び yield* を使うことができる
//
// ジェネレータ(yield)の挙動
//   ジェネレータ を作って .next() を実行すると、最初の yield が出てくるまで関数が実行されます。
//   yield まで関数が実行されると、関数の実行はいったん停止し、イテレータリザルトとして値が返されます。
//   再び .next() を実行すると、いったん停止した位置から再び関数が再開され、次の yield まで実行されます。
console.log("\n\nジェネレータを使って書く");
function* gfn(from, to){ while(from <= to) yield from++; }
var g = gfn(1, 20);
for(var num of g) console.log(num);   // この中で暗黙的に.next()が実行されている
