// async関数だからといって非同期実行されるとは限らないサンプル
// このプログラムの例ではfoo, barと同期的に実行されることを確認します。

async function foo() {
    //await new Promise(r=>setTimeout(()=>r(),0));
    console.log("foo");
}

async function bar() {
    await foo();                  // asyncで定義したfooが呼ばれる。実はこれは同期的に呼ばれる。
    console.log("bar");    
}
bar();
