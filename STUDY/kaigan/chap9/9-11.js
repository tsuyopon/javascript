// 配列の要素を前から、後ろからループする
var myArray = ['blue', 'green', 'orange', 'red'];
var myArrayLength = myArray.length;

var counter = 0;

// 前からループする
console.log("Loop from front");
while( counter < myArrayLength){
	console.log(myArray[counter]);
	counter++;
}

// 後ろからループする
console.log("\nLoop from back");
while(myArrayLength--){
	console.log(myArray[myArrayLength]);
}
