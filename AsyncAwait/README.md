# 概要
async/awaitの機能はES7から採用される機能です。

Node.jsのV7.6からasync/await機能が正式に使うことができる様になりました。
この機能を使うことでPromiseにより非同期処理を直列に記述する方法よりも、さらにコードを簡潔に記述できるようになります。


最初に以下の説明を読むのがよさそうです
- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

本質なのは次の点です。
- async: 非同期関数を定義する。実はPromiseを返す関数を定義していることになります。
- await: 非同期関数からの取得時に定義され、その値の取得の解決が完了するまでasyncで定義した関数を待ちます。

sample2.jsを見てもらうとわかりますが、asyncはPromise自体を理解しないと理解できません。


本質としては上記だけですが、実利用となった場合には以下の項目も覚えておくとよさそうです。

- awaitをすることで、その値の取得をまちます。(sample1.js)
- async関数内でreturn "OK"すると、resolve("OK")と同じ意味になる(sample2.js)
- async, awaitだからといって必ず非同期とは限らない場合もある(sample3.js)
- async関数内でErrorオブジェクトをthrowするとrejectされたのと同様の扱いになります。 (sample4.js)
- awaitはasync関数の中でしか使えません(じゃないとSyntaxErrorとなる)。(sample5.js)
- awaitをつけ忘れると非同期実行されます。(sample5.js)

# 詳細
Async/awaitを使うのであれば以下のサンプルプログラムは全て理解している必要があります。
- sample1.js
  - PromiseとAsync/waitの記法の違いを理解する
- sample2.js
  - async定義した関数とPromiseオブジェクトを返す関数が同じであることを理解する
- sample3.js
  - async関数だからといって非同期実行されるとは限らないサンプル
- sample4.js
  - async関数内でErrorオブジェクトをthrowするとrejectしたのと同じであることを確認するサンプル
- sample5.js
  - asyncで定義された関数内でawaitは定義しなければならないことを確認するサンプル
  - awaitを付与しないと待たずに非同期実行することも確認する
- sample6.js
  - Promise.allでも問題なくawaitが有効になることを確認する。
- class1.js
  - クラス構文とAsync/awaitを組み合わせたサンプル。実際のプログラムを組む場合などには必読
