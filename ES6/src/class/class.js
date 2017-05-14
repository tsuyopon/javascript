// class, constructor, extends, superなど

// class定義やconstructorの概念などがある。
class Base {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log(`my name is ${this.name}`);
  }
}
 
// extendsやsuperの概念などもあります。
class App extends Base {
  constructor(name = 'nakajmg') {
    super(name);
  }
}

class SubApp extends App {
  constructor(name = 'subapp') {
    super(name);
  }
}
 
var app = new App();
app.showName();

var subapp = new SubApp();
subapp.showName();
