var __ = require('underscore');

var human_1 = {name:"Christ",religion:"Christianity",birth:1};
var human_2 = {name:"Buddha",religion:"Buddhism",birth:-563};
var human_3 = {name:"Bill Gates",religion:"Christianity",birth:1955};
var human_4 = {name:"Steve Jobs",religion:"Buddhism",birth:1955};
var humansArr = [human_1,human_2,human_3,human_4];

var results = __.where(humansArr, {religion: "Buddhism"});
console.log(results);
//[human_2,human_4]というように該当オブジェクトが配列で返ってきます。

var results_2 = __.where(humansArr, {birth: 1955, religion:"Christianity"});
console.log(results_2); // Bill Gatesのオブジェクト
