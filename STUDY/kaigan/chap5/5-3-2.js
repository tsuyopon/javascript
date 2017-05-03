var myFUnction = function(){ var foo = 'bar'; };
var myApp = function(){
	var run = function(){
		try {
			console.log(foo);
		} catch(e){
			console.log(e);
		}
	}();
}
myApp();
