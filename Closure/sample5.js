// 名前空間を定義する。

//グローバルシンボルだけは宣言しておく。（既に使用済みでもvarは問題なし）  
var com;  
//プロパティがなかったら追加する。  
//すでにある場合はオブジェクトかどうか判断して例外発生させた方がいいらしい  
if (!com) com = {};  
if (!com.example) com.example = {};  
if (!com.example.foo) com.example.foo = {};  
if (!com.example.foo.bar) com.example.foo.bar = {};  
  
(function() {  
    //匿名関数内に変数や関数を定義していく。  
    var hoge = "ほげほげ";  
    function fuga() {  
        console.log(piyo);  
    };  
    var piyo = "ぴよぴよ";  
      
    //最後に名前空間に突っ込む  
    var ns = com.example.foo.bar;  
    ns.hoge = hoge;  
    ns.fuga = fuga;  
    //プライベートにしたいプロパティは代入しないで放置  
    //piyoはプライベートな変数になる  
})();  
//匿名関数を即実行して完了  


// 定義した名前空間を利用する
console.log(com.example.foo.bar.hoge);
console.log(com.example.foo.bar.fuga);
