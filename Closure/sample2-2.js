// sample1.jsをわかりやすく別の方法に書き直したもの。両者を比較してみるといいかも
function myEnclosure() {
  var i = 0;
  function myClosure() {
    return i++;
  }
  return myClosure;
}
var f = myEnclosure();
console.log(f());// 0を出力
console.log(f());// 1を出力
console.log(f());// 2を出力
