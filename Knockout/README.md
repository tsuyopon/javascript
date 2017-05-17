# 概要
Knockout.jsを使った単純なサンプル集

# 使い方
DocumentRoot配下にKnockoutディレクトリを配置します。(git cloneから落としてKnockout/を配置するということです)  
そして、bowerをダウンロードするために次のコマンドを実行します。
```
$ npm install
$ bower install
```

hello配下であれば次のようにしてアクセスします
- http://<servername>/Knockout/hello/

Knockout直下に移動するとリンク一覧が表示されるはず
http://<servername>/Knockout/


# 知っておいたほうが良さそうなメモ

### 特殊変数
特殊変数は知らないとドハマリするので抑えておくと良い。
- http://knockoutjs.com/documentation/binding-context.html
- 特殊変数
  - $parents
  - $root
  - $component
  - $data
  - $index
  - $parentContext
  - $rawData
  - $componentTemplateNodes
  - $context
  - $element

### ifとvisibleの違い
ifの場合
```
<span data-bind="if: flag">ほげほげ</span>
```
タグの中身が空っぽの状態になる
```
<span></span>
```

続いてvisibleの場合
```
<span data-bind="visible: flag">ほげほげ</span>
```
要素はそのままだけど、スタイルで非表示にしている
```
<span style="display: none;">ほげほげ</span>
```

# 参考URL
- 公式サイト
  - http://knockoutjs.com/documentation/introduction.html
  - http://knockoutjs.com/documentation/uniqueName-binding.html
- Knockout.js 使い方メモ
  - http://qiita.com/opengl-8080/items/2b0fb26be865bd5d1890
