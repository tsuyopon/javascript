/*
// before
var fn = function (a, b) {
  return a + b;
};
*/

// embrace {} each case to avoid error.
// case1
{
	const fn = (a, b) => {
	  return a + b;
	};
}

// case2
// 単一式の場合はブラケットやreturnを省略できる
{
	const fn = (a, b) => a + b;
}
