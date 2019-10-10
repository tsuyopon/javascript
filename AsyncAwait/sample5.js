// asyncで定義された関数内でawaitは定義しなければならい
// awaitをつける場合とつけ忘れた場合の違いを確認するプログラム
async function bar() {
    console.log("bar");
}

async function baz() {
    console.log("baz");
}

// async関数
async function awaitFunc() {
    console.log("awaitFunc Start");
    // barが終わるのを待ってbazが実行される
    await bar();                         // await処理はasync内にしか書けないらしい
    await baz();
    console.log("awaitFunc End");
}

// async関数
async function syncFunc() {
    console.log("syncFunc Start");
    // awaitをつけ忘れると、以下の２つはただ非同期実行されるだけで、お互い待ちません
    bar();
    baz();
    console.log("syncFunc End");
}


awaitFunc();
syncFunc();
