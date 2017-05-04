var foo = Boolean(0);     // false(0はfalseに変換される)
console.log(foo);
if(foo){
	console.log("foo is true");
}

var bar = Boolean(Math);  // true
console.log(bar);
if(bar){
	console.log("bar is true");
}
