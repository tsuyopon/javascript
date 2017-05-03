// 7-7-2.jsと7-7-3.jsのおさらい
var logElementNumber = function(len){
	var funcArray = [];
	var i;
	var func = function(n){
		return function() { console.log(n, i); };   // nはローカルスコープで、iは親関数のスコープチェーン
	};

	for(i = 0; i < len ; i++){
		funcArray[i] = func(i);
	}
	return funcArray;
};

var myArray1 = logElementNumber(3);
var myArray2 = logElementNumber(5);

myArray1[0]();  // 0 3
myArray1[1]();  // 1 3
myArray1[2]();  // 2 3

myArray2[0]();  // 1 5
myArray2[1]();  // 1 5
myArray2[2]();  // 2 5
myArray2[3]();  // 3 5
myArray2[4]();  // 4 5
