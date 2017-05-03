// すべてのオブジェクトはObject.prototypeから継承されることを理解する
Object.prototype.foo = 'foo';
console.log(Object.foo);

var myString = 'empty string';
console.log(myString.foo);      // myStringに定義されていはずのfooだがObject.prototypeから継承される
