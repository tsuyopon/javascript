//メソッド呼び出しパターン
var myObject = {
  value: 10,
  show: function() {
    console.log(this.value);   // thisにはmyObjectが入る
  }
}
myObject.show(); // 10
