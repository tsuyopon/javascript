var myObject = {
  value: 1,
  show: function() {
    console.log(this.value);
  }
};
var yourObject = {
  value: 3
};

myObject.show(); // 1

myObject.show.apply(yourObject); // 3
myObject.show.call(yourObject); // 3
