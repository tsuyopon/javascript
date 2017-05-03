// 関数の中の変数iはすべて同じ変数を参照することになるので、期待値通りにならない例。正しい例は7-7-3.jsにある。
var logElementNumber = function(){
	var funcArray = [];
	var i;
	for(i=0; i<5; i++){
		funcArray[i] = function(){ console.log(i); }
	}
	return funcArray;
}();

// すべてiは同じものを参照しているので一番大きなi=5が使われる。
logElementNumber[0]();  // 0を期待しているが、5が出力される
logElementNumber[1]();  // 1を期待しているが、5が出力される
logElementNumber[2]();  // 2を期待しているが、5が出力される
logElementNumber[3]();  // 3を期待しているが、5が出力される
logElementNumber[4]();  // 4を期待しているが、5が出力される
