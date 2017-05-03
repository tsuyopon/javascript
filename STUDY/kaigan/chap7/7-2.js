// Javascriptではブロックスコープを持たないことを確認する例
// 次のfooはifやforなどのブロックではスコープを生成せずにfooを上書きすることを確認できる。
var foo=1;

if(true){
	foo = 2;
	for(var i = 3; i <= 5; i++){
		foo = i;
		console.log(foo);
	}
}
