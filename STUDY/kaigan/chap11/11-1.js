// new演算子とNumber()コンストラクタを使った生成 (typeofがObjectとなるので非推奨)
var numberObject = new Number(1);
console.log(numberObject);              // {}
console.log(typeof numberObject);       // object

// new演算子をつかわずにNumber()コンストラクタを使ってプリミティブ値を生成
var numberObjectWithOutNew = Number(1);
console.log(numberObjectWithOutNew);         // 1
console.log(typeof numberObjectWithOutNew);  // number

// リテラルでプリミティブ値を生成する方法(裏ではコンストラクタを使っているらしい)
var numberLiteral = 1;
console.log(numberLiteral);                  // 1
console.log(typeof numberLiteral);           // number
