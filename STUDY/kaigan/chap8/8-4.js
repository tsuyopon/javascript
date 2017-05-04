// 自動的に付与しているprototypeは空のオブジェクト{}を設定しているのと同じ
var myFunction = function(){};
myFunction.prototype = {};
console.log(myFunction.prototype);  // {}
