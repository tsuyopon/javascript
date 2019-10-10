// async関数内でErrorオブジェクトをthrowするとrejectしたのと同じです。
async function foo() {
    throw new Error("エラーだよ！");       // asyncで定義された関数内でErrowをthrowすることでPromiseオブジェクトはrejectされたのと同様になる。
}
foo().then( () => {} ).catch( err => {
    console.log( err.message ); // => エラーだよ！
});
