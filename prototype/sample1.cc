//Azarashiという関数の型を作る
function Azarashi(n){
  this.name = n;
}
Azarashi.prototype.cry = function(){
  console.log(this.name +"Azarashi: KyuKyu"+ ", age: " + this.age);
};

Azarashi.prototype.age = 10;

var goma = new Azarashi("Goma");
goma.cry();
