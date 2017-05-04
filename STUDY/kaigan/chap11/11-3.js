// 様々な値をNumberへの引数へと渡した場合、どのような数値になるのかを理解する

// newを使った場合(非推奨)
var numberOne = new Number(456);
console.log(numberOne);             // {}
console.log(typeof numberOne);      // object

// 数値の変換
console.log(Number(1), Number(1.1), Number(-10), Number(0xff));             // 1 1.1 -10 255

// 数値文字の変換
console.log(Number('10'), Number('0010'), Number('1.0e1'));                 // 10 10 10

// 文字の変換
console.log(Number(''), Number('  '), Number('123abc'));                    // 0 0 NaN

// "0x"から始まる文字列については16進数変換するが、"0"から始まる文字列は8進数変換しない
console.log(Number('0x0a'), Number('010'));                                 // 10 10

// 特殊文字
console.log(Number(undefined), Number(null), Number(true), Number(false));  // NaN 0 1 0

// オブジェクトや関数
console.log(Number({}), Number(function(){}));                              // NaN NaN

// 配列
console.log(Number([]), Number([1]), Number(['010']), Number([1,2]));       // 0 1 10 NaN
