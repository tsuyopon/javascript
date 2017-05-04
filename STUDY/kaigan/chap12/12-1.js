// Booleanの真偽値判定のための精製方法について理解する。

// new演算子とBoolenコンストラクタを使った生成 -> typeofがobjectとなるので***非推奨***
var myBoolean1 = new Boolean(false);
console.log(typeof myBoolean1);       // object

// new演算子をつかわないでBoolean()コンストラクタを使用してプリミティブ真偽値を生成
var myBoolean2 = Boolean(0);
console.log(typeof myBoolean2);       // boolean

// リテラルでプリミティブ値を生成(裏ではコンストラクタを使っているらしい)
var myBoolean3 = false;
console.log(typeof myBoolean3);       // boolean
console.log(myBoolean1, myBoolean2, myBoolean3);  // {}, false, false
