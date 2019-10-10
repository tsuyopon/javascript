// async定義した関数とPromiseオブジェクトを返す関数が同じであることを確認する。

// asyncで定義した関数と、Promiseオブジェクトを返す以下の２つは本質的に同じとなります。
async function foo() { return "OK!"; }
function bar() {
    return new Promise( resolve => { resolve("OK!"); });   // これはPromiseオブジェクトを返します。
}

async function main() {
    let result = await foo();
    console.log(result);
    let p = foo();
    console.log(await p);
    console.log(await bar());                              // Promiseオブジェクトもawaitで待つことができます。これは重要です。
    console.log(await (new Promise( resolve => {
            resolve("OK!");})));
    // => OK!
    // => OK!
    // => OK!
    // => OK!
}

main();
