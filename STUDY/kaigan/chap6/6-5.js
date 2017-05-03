// callやapplyをつかってthisの値をコントールする

var myObject = {};

var myFunction = function(param1, param2){
	console.log('######################################');
	this.foo = param1;
	this.bar = param2;
	console.log(this);   // callとapply経由で呼び出した場合はmyObjectに限定される
};

// そのまま呼び出した場合
myFunction('foo', 'bar');

// callを使った場合
myFunction.call(myObject, 'foo', 'bar');

// applyを使った場合(callとの違いは引数の渡し方だけ)
myFunction.apply(myObject, ['foo', 'bar']);
