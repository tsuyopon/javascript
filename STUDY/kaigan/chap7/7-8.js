// グローバルスコープで宣言されている関数もクロージャ
var a = 1;
var func = function(){ console.log(a); };   // これもクロージャ

(function (f){
 	var a = 100;
	f();            // 1が出力される
})(func);
