function MyObject(value) {
  this.value = value;
  this.increment = function() {
    this.value++;
  };
}
var myObject = new MyObject(0);
console.log(myObject.value); // 0

myObject.increment();
console.log(myObject.value); // 1

