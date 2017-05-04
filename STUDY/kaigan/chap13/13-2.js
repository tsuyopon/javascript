// typeof判定は常にプリミティブ型を使うことを理解する

// オブジェクト型だと常にオブジェクトになります。
console.log(typeof new String('foo'));  // object
console.log(typeof new Number(1));      // object
console.log(typeof new Boolean(true));  // object

// リテラルでtypeofした場合だと正しく判断することができます。
console.log(typeof new String('foo'));  // object
console.log(typeof 'foo');  // string
console.log(typeof 1);      // number
console.log(typeof true);   // boolean
