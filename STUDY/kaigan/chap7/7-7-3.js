// 7-7-2.jsを意図通りに動かすプログラム
var logElementNumber = function(){
	var funcArray = [];
	var i;
	var func = function(i){  // 実はこのfunction中のiはvar iと定義されているのと同一なのでローカルスコープとなる。
		// パラメータにiを指定しているため、この関数スコープにローカル変数iが定義される。
		return function(){ console.log(i); };
	}
	for(i = 0; i < 5; i++){
		funcArray[i] = func(i);  // インデックスを出力する関数をfuncArrayのそれぞれの要素に格納
	}
	return funcArray;
}();

logElementNumber[0]();
logElementNumber[1]();
logElementNumber[2]();
logElementNumber[3]();
logElementNumber[4]();
