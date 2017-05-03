// オブジェクトの宣言方法について(ドット記法、オブジェクトリテラル、プロパティを文字列として宣言する)
// ドット記法を使って記述する
var cody = new Object();
cody.living = true;
cody.age = 100;
cody.gender = 'male';
cody.getGender = function() { return cody.gender; };

// codyと同じで、cody2ではオブジェクトリテラル{}を使っているだけ
var cody2 = {
	living: true,
	age: 100,
	gender: 'male',
	getGender: function() { return cody.gender; }
}

// プロパティ名を文字列にすることもできる。次に該当する場合には文字列にする必要がある。
// javascriptの予約語、スペースや特殊文字を含んでいる場合、数字で始まる場合はクォートで囲む必要がある。
var cody3 = {
	'living': true,
	'age': 100,
	'gender': 'male',
	'getGender': function() { return cody.gender; }
}

console.log(cody);
console.log(cody2);
console.log(cody3);
