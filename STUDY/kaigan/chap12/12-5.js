// 真偽値オブジェクトは格納されている値がfalseであってもtrueと評価されることを理解する。

// newがある場合
var falseValue = new Boolean(false);  // object
console.log(falseValue); 
if(falseValue){
	console.log('falseValue is truthy');        // こちらに入る(真偽値オブジェクトの内容がfalseであってもオブジェクト自体は常にtrueとみなされる)
} else {
	console.log('falseValue is not truthy');
}

// newがない場合
var falseValue2 = Boolean(false);     // primitive
console.log(falseValue);
if(falseValue2){
	console.log('falseValue2 is truthy');
} else {
	console.log('falseValue2 is not truthy');   // こちらに入る(objectではなくprimitiveなので正しく扱われる)
}
