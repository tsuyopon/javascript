// 関数呼び出しパターン 
function show() {
	console.log(this);
	this.value = 1;      // この変数はグローバル変数となります。
}

show(); // thisはグローバルオブジェクトを指します。
