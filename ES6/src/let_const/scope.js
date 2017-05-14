//  var, let, constのスコープの違いを抑えておくこと

// 以下はコメントを外すとReferenceErrorの箇所でエラーとなるので、確認の必要に応じてコメントを外すこと
/*
if(1){var i = 10;}
console.log(i); //10

if(1){let j = 10;}
console.log(j); // ReferenceError

if(1){const k = 10;}
console.log(k);// ReferenceError
*/

var i = 10;
let x = 11;
const y = 13;

if(1){
  console.log(i);// 当然大丈夫
  console.log(x);// これは大丈夫
  console.log(y);// これも大丈夫
}
