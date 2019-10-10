// PromiseとAsyncAwaitの記述の違いを確認するプログラムです。

/////////////////////////////////////////////////////
// Promiseを使った場合
/////////////////////////////////////////////////////
const promise1 = (num) => {
    return new Promise(resolve => {
        resolve(num + 1)
    })
}
 
const promise2 = (num) => {
    return new Promise(resolve => {
        resolve(num + 2)
    })
}
 
const promise3 = (num) => {
    return new Promise(resolve => {
        resolve(num + 3)
    })
}
 
const promise = promise1(0)          // then, catchによるチェーンになって、直感的でない
    .then(num => {
        return promise2(num)
    })
    .then(num => {
        return promise3(num)
    })
    .then(num => {
        console.log(num)
    })
    .catch(error => {
        console.log(error)
    })
     
/////////////////////////////////////////////////////
// AsyncAwaitを使った場合
/////////////////////////////////////////////////////
// asyncAwaitN関数にはasyncが宣言されていることを確認してください。asyncと宣言することで非同期関数を定義します。
const asyncAwait1 = async (num) => {
    return await num + 1
}
 
const asyncAwait2 = async (num) => {
    return await num + 2
}
 
const asyncAwait3 = async (num) => {
    return await num + 3
}
 
const asyncAwait = async () => {
    // 以下の３つの変数はawaitが指定されていることに着目してください。
    // awaitはasync関数の実行を一時停止してPromiseの解決を待ちます。
    const aa1 = await asyncAwait1(0)       // aa1の値が取得できるまでこの行で待ちます
    const aa2 = await asyncAwait2(aa1)     // aa2の値が取得できるまでこの行で待ちます
    const aa3 = await asyncAwait3(aa2)     // aa3の値が取得できるまでこの行で待ちます
    const sum = aa3
    console.log(aa3)
}
 
asyncAwait().catch(error => { console.log(error) })
 
