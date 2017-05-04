// 文字列・数値・真偽値のオブジェクトとしての利用について

// 文字列オブジェクトをオブジェクトとして扱う
var stringObject = new String('foo');
console.log(stringObject.length);         // 3
console.log(stringObject['length']);      // 3

// 文字列プリミティブをオブジェクトとして扱う
var stringLiteral = 'foo';
console.log(stringLiteral.length);        // 3
console.log(stringLiteral['length']);     // 3
console.log('bar'.length);                // 3
console.log('bar'['length']);             // 3

// 数値オブジェクトをオブジェクトとして扱う
var numberObject = new Number(1.10023);
console.log(numberObject.toFixed());      // 1
console.log(numberObject['toFixed']());   // 1

// 数値プリミティブをオブジェクトとして扱う
var numberLiteral = 1.10023;
console.log(numberLiteral.toFixed());     // 1
console.log(numberLiteral['toFixed']());  // 1
console.log((1234).toString());           // 1234
console.log(1234['toString']());          // 1234

// 真偽値オブジェクトをオブジェクトとして扱う
var booleanObject = new Boolean(0);
console.log(booleanObject.toString());    // false
console.log(booleanObject['toString']()); // false

// 真偽値プリミティブをオブジェクトとして扱う
var booleanLiteral = false;
console.log(booleanLiteral.toString());   // false
console.log(booleanLiteral['toString']());// false
console.log((true).toString());           // true
console.log(true['toString']());          // true
