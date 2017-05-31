// yield*について(アスタリスクが付いていることに注意)

// yield* には イテラブルなオブジェクト を与えます。
// すると、.next()するとイテラブルなオブジェクト から順番に値を取り出し、それぞれの値に対して yield を行ってくれます。

// pattern1
function* gfn(){
	yield* [1, 3, 5];
}

var g = gfn();

console.log( g.next() ); // { value: 1, done: false }
console.log( g.next() ); // { value: 3, done: false }
console.log( g.next() ); // { value: 5, done: false }
console.log( g.next() ); // { value: undefined, done: true }


// pattern2
function* gfn2(){
	    yield* "ひよこ";
}

var g2 = gfn2();

console.log( g2.next() ); // { value: "ひ", done: false }
console.log( g2.next() ); // { value: "よ", done: false }
console.log( g2.next() ); // { value: "こ", done: false }
console.log( g2.next() ); // { value: undefined, done: true }
