# 概要
Javascriptのクロージャについて

クロージャーのメリットは次があります。
- (1) 即時関数として即時実行できる
- (2) その関数が終了した後であっても変数情報を保持するので、グローバル変数を多く利用しなくて済む
- (3) クロージャー内であれば変数の内側の関数であってもその変数を参照・更新することができる。
- (4) 名前空間を定義することができる。これによって、外部から参照されたくない関数や変数を隠すこともできる。
  -  即時関数は現在のスコープを汚染せずに新たなスコープを作成するための唯一の手段となります。

# 詳細
基本的なクロージャの使用例については次の4つを確認すればOK
- (1)
  - sample1.js
- (2)
  - sample2-1.js, sample2-2.js
- (3)
  - sample3.js, sample4.js
- (4)
  - sample5.js

# 参考URL
- How do JavaScript closures work?
  - http://stackoverflow.com/questions/111102/how-do-javascript-closures-work?noredirect=1&lq=1
- What is a practical use for a closure in JavaScript?
  - http://stackoverflow.com/questions/2728278/what-is-a-practical-use-for-a-closure-in-javascript
