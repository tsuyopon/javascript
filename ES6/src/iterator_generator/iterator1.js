// イテレータとは「順番にイテレータリザルト」を取得できるオブジェクトを指す次の２つを満たすものである。
// - 1. .nextメソッドを持つ
// - 2. .nextを実行するとイテレータリザルトを返却する
//
// 参考: http://qiita.com/kura07/items/cf168a7ea20e8c2554c6

var obj = {}; // イテラブルなオブジェクト
obj[Symbol.iterator] = function(){
    var iterator = {}; // イテレータ
    var count = 1;
    iterator.next = function(){
        var iteratorResult = (count <= 10)
            ? { value: count++,   done: false }
            : { value: undefined, done: true };
        return iteratorResult; // イテレータリザルト
    };
    return iterator;
};

// 独自で記述する場合はこれだけコード量が必要であり、ここまでならES5でも記述可能
var iterator = obj[Symbol.iterator](); // イテラブルなオブジェクトからイテレータを取得する
var iteratorResult;
while(true){
    iteratorResult = iterator.next();  // 順番に値を取りだす
    if(iteratorResult.done) break;     // 取り出し終えたなら、break
    console.log(iteratorResult.value); // 値をコンソールに出力
}

// イテレータを使えば上記がたったの１行になる
for(var v of obj) console.log(v);
