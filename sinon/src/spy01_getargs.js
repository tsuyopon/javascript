// 特定の関数のように呼び出すことができる

var sinon = require('sinon');
var spy = sinon.spy();

//We can call a spy like a function
spy('Hello', 'World');

//Now we can get information about the call
console.log(spy.firstCall.args); //output: ['Hello', 'World']

