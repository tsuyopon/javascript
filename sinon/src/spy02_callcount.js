var sinon = require('sinon');
var spy = sinon.spy();

var user = {
  setName: function(name){
    this.name = name;
  }
}

//Create a spy for the setName function
var setNameSpy = sinon.spy(user, 'setName');

//Now, any time we call the function, the spy logs information about it
user.setName('hogehoge1');
console.log(setNameSpy.calledOnce); //output: true

user.setName('hogehoge2');
user.setName('hogehoge3');
user.setName('hogehoge4');

//Which we can see by looking at the spy object
console.log(setNameSpy.callCount); //output: 4

//console.log(setNameSpy);

//Important final step - remove the spy
setNameSpy.restore();

