# 概要
スコープとクロージャーについて

# 詳細
- 変数には「グローバルスコープ」、「ローカルスコープ」、「evalスコープ」の３つがある。
  - 7-1.js
- Javascriptではブロックスコープを持たない
  - 7-2.js
- 関数内であっても変数定義にvarが付与されていないとグローバルスコープとなるので、関数内ではvarを付与すると良い
  - 7-3.js
- 変数がどのようにvarで定義された変数をたどるのかについての例
  - 7-4.js
- スコープチェーン中で最初に発見した目的の値が探しだしたらそれ以上は探索しない
  - 7-5.js
- スコープは関数実行時ではなく関数が定義されたときに決定される。
  - 7-6.js
  - 7-8.js
- スコープによって間違いを起こしやすい例(重要)
  - 7-7-1.js, 7-7-2.js, 7-7-3.js, 7-7-4.js