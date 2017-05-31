// アロー演算子についてpart1

/*
// Before (わざわざfunctionというのを書く必要があった)
var show = function(text) {
  console.log(text);
}; 
*/

// case1
var show = (text) => {
  console.log(text);
};

// case2
var show = text => {
  console.log(text);
};

// case3
var show = (text) => text + ' さようなら';
var text = show('こんにちは');
console.log(text); // こんにちは さようなら
