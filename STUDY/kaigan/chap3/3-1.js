// 単純なオブジェクトのサンプル

var cody = {};   // プロパティを持たない空のオブジェクトを生成する(var cody = new Object()と同じ)

for (key in cody){
	if(cody.hasOwnProperty(key)){
		console.log(key);           // codyはプロパティを持たないので何も出力されない
	}
}
