// 即時関数(クロージャ)の非常に簡単なサンプル

console.log("before closure");

function hoge(){
     console.log("in function");
}

// NOTE: この関数が明示的に実行するように記述していないのに実行されていることに着目してください。
(function () {
     var a=1, b=2;
     var sum=a+b;
     console.log("in closure: "+sum);
}());

console.log("after closure");
