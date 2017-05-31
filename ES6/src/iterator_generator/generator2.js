// yieldの動作を確認する。
// g.next()を実行した際に次のyieldまでの処理までが実行されていることを確認してください。

function* gfn(n){
    n++;
    yield n;
    n *= 2;
    yield n;
    n = 0;
    yield n;
}

var g = gfn(10); // ジェネレータを作った

// ジェネレータのオブジェクトの出力にはdoneがあります。
console.log( g.next() ); // { value: 11, done: false }
// n++; が実行された後、yield n; によって n の値が返された。

console.log( g.next() ); // { value: 22, done: false }
// n *= 2; が実行された後、yield n; によって n の値が返された。

console.log( g.next() ); // { value: 0, done: false }
// n = 0; が実行された後、yield n; によって n の値が返された。

console.log( g.next() ); // { value: undefined, done: true }
// 関数の実行が終了したので、.done が true になった。
