// デフォルト引数の指定
function multiply(a, b = 1) {
  return a*b;
}
multiply(5);


function addTwoNumbers(x=0, y=0) {
    return x + y;
}
addTwoNumbers(2, 4); // 6
addTwoNumbers(2); // 2
addTwoNumbers(); // 0
