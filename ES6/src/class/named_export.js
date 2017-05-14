// _named_export.jsではexportされている関数や定数があるのでそれを利用する場合にはimportを使う

import { square, diag } from './_named_export';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// 上記は次のようにasなどでの指定も可能
import * as lib from './_named_export';
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
