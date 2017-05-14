// 配列の定義が一括で引数に指定できるようになりました。
var array = [1, 2, 3]
function f(x, y, z) { }
f(...array);               //f(1, 2, 3)という引数での関数fの呼び出しと同義

[...array, 4, 5, 6]         //[1, 2, 3, 4, 5, 6]となる
var x
var y
var z
var variables = [x, y, z]
[a, b, variables] = [1, 2, 3, 4, 5];  // a = 1, b = 2, x = 3, y = 4, z = 5とした場合と同じ
