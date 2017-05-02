// クロージャは外側の変数を更新できる。次の例ではsetがvalを更新できていることに着目する。
function box() {
  var val = undefined;
  return {
    set: function(newVal){
      val = newVal;
    },
    get: function(){
      return val;
    },
    type: function(){
      return typeof val;
    }
  };
}

var b = box();
console.log(b.type());    // undefined
console.log("set 10"); b.set(10);
console.log(b.get());     // 10
console.log(b.type());    // "number"
