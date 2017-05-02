var __ = require('underscore');

console.log("\n### version");      // バージョンを表示する
console.log(__.VERSION);

console.log("\n### use each");     // 各々に対して処理を実施する
__.each([1, 2, 3], function(num){ console.log(num); });
__.each({one : 1, two : 2, three : 3}, function(num, key){ console.log(num); });

console.log("\n### use map");     // 各要素に対して特定の処理を施す
console.log(__.map([1, 2, 3], function(num){ return num * 3; }));
console.log(__.map({one : 1, two : 2, three : 3}, function(num, key){ return num * 3; }));

console.log("\n### use reduce");  // 1つの値に集約する
var reduce_sum = __.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log("reduce result: " + reduce_sum);


/*
 * 真値系
 */
console.log("\n### use all");     // 与えられたリストすべてが真値テストを通過したらtrueを返す。それ以外はfalse
console.log(__.all([true, 1, null, 'yes']));
console.log(__.all([true, 1, 'yes']));

console.log("\n### use any");     // 与えられたリストで１つでも真値テストを通過したらtrueを返す。
console.log(__.any([null, 0, 'yes', false]));

console.log("\n### use include"); // 与えられたリストの中に指定した値が含まれて入ればtrueとなる。
console.log(__.include([1, 2, 3], 3));
console.log(__.include([1, 2, 3], 4));

console.log("\n### use detect"); // 与えられたリストの中から一番最初に真値テストを通過した値を返します。
console.log(__.detect([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));

console.log("\n### use select"); // 与えられたリストの中から真値テストを通過した値をすべて返します。
console.log(__.select([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));

console.log("\n### use reject"); // 与えられたリストの中から真値テストを通過しなかった値をすべて返します。
console.log(__.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));

/*
 * filter 
 */
console.log("\n### use filter");     // 2で割り切れるものだけを抽出する
var nos = [143,3343,343,344,556,344,5876,543,7764,83477,92340,1045,1100,1200];
console.log(__.filter( nos, function(no){ return no % 2 == 0;} ));

console.log("\n### use without");    // valuesを取り除いた配列を返す。===演算子で比較される。非破壊的。
console.log(__.without([1, 2, 1, 0, 3, 1, 4], 0, 1));

console.log("\n### use uniq");        // 配列から重複を取り除く。===演算子で比較される。isSrotedをtrueにすると処理が早くなる。非破壊的。
console.log(__.uniq([1, 2, 1, 3, 1, 4]));

console.log("\n### use compact");     // 曖昧な値であるfalse, null, 0, "", undefinedを取り除いた配列を返す。非破壊的。
console.log(__.compact([0, 1, false, 2, '', 3]));

//console.log("\n### use intersect");   // 複数の配列の共通集合を返す。
//console.log(__.intersect([1, 2, 3], [101, 2, 1, 10], [2, 1]));

/*
 * 抽出
 */
console.log("\n### use values");     // valueを取得する
console.log("values:" + __.values({one: 1, two: 2, three: 3})); // [1, 2, 3]_.values({one: 1, two: 2, three: 3}); // [1, 2, 3]

/*
 * util
 */
console.log("\n### use delay");     // listの各要素に対して指定した関数を実行する
var log = __.bind(console.log, console);
__.delay(log, 500, 'logged later');

console.log("\n### use invoke");     // listの各要素に対して指定した関数を実行する
console.log(__.invoke([[5, 1, 7], [3, 2, 1]], 'sort'));

console.log("\n### use min");        // 最小値を返す
console.log(__.min([1, 2, 3]));

console.log("\n### use max");        // 最大値を返す
console.log(__.max([1, 2, 3]));

console.log("\n### use size");        // サイズを返す
console.log(__.size([1, 2, 3]));
console.log(__.size({one : 1, two : 2, three : 3}));

console.log("\n### use first");       // 最初の要素を返す
console.log(__.first([1, 2, 3]));

console.log("\n### use last");        // 最後の要素を返す
console.log(__.last([1, 2, 3]));

console.log("\n### use rest");        // 最初を覗いた残りの要素を返す
console.log(__.rest([1, 2, 3]));

console.log("\n### use flatten");     // 多次元配列を１次元配列に変換する。非破壊的
console.log(__.flatten([1, [2], [3, [[[4]]]]]));

console.log("\n### use range");       // 配列から重複を取り除く。===演算子で比較される。isSrotedをtrueにすると処理が早くなる。非破壊的。
console.log(__.range(10));
console.log(__.range(1,11));
console.log(__.range(0,30,5));
console.log(__.range(0,-10,-1));
console.log(__.range(0));


