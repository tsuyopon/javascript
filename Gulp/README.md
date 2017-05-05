# 概要
gulpとは

# 使い方
gulpfile.jsというプログラムを準備します。  
たとえば、sassのプラグインの場合にはどこから読み込んでsassの処理をどこに吐き出すといったプログラムは自分で記述します。


# Gulpプラグイン
参考までにいくつかのやつだけ記しておきますが、このほかにもgulpプラグインはたくさんあるようです。

### Javascript
- gulp-jshint
  - JavaScriptの文法チェックに使用する
- gulp-browserify
  - クライアント側のJavaScriptにもNode.jsのrequireの考え方を導入できます。
- gulp-uglify
  - JavaScriptを圧縮してくれます
- gulp-babel
  - JavaScriptをES2015で記述する場合に、ブラウザで動作するよう、ES5にコンパイルするプラグインです
- gulp-webpack
  - JavaScriptの依存性を解決しながら、1つにまとめてくれるwebpackのプラグインです。
- gulp-beautify
  - JavaScriptを整形してくれるプラグインです。
- gulp-bower
  - bowerを実行するプラグインです。

### CSS
- gulp-csslint
  - CSSの文法チェックに使用する
- gulp-merge-media-queries
  - メディアクエリの順番を整頓してくれます。
- gulp-autoprefixer
  - Can I Useを使用して、ブラウザーのベンダープリフィックスを自動付与してくれます。
- gulp-csscomb
  - プロパティの順番を整理してくれます
- gulp-frontnote
  - 特定のフォーマットでCSSを書く事でCSSのスタイルガイドを自動生成してくれます。
- gulp-minify-css
  - CSSを圧縮してくれます。
- gulp-uncss
  - 指定されたHTMLファイルを解析し、一度も使用されていないセレクタをCSSから削除してくれる。
- gulp-stylestats
  - CSSを解析して品質管理に役立つ統計情報を出力してくれる。
- gulp-bless
  - CSSのセレクタ数をチェックし、IE9の認識できる個数を越えると自動でCSSを分割する。
- gulp-sourcemaps
  - スタイルがどこのファイルから当てられてるのか分かるようになる

### HTML
- gulp-minify-html
  - HTMLファイルを圧縮します。
- gulp-ejs
  - EJS形式で書かれたファイルをHTMLに変換します
- gulp-html-validator
  - HTMLにバリデートをかけ、結果をファイルに出力する。

### ユーティリティ
- gulp-load-plugins
  - "gulp-"で始まるモジュールを自動的にrequire()してくれる。
- run-sequcne
  - 複数のタスクを同期的に順番を指定して実行できる。
- gulp-plumber
  - ファイル監視中におかしいとこがあっても監視をストップしない
- gulp-ftp
  - ftpでのアップロードをコマンドでできるようにするプラグインです。
- gulp-if
  - タスク記述時に処理の分岐ができるプラグイン。
- gulp-notify
  - Mac,Linux,Windowsに通知メッセージ
- gulp-sitemap
  - サイトマップXML作成
- gulp-webshot 
  - Webページのスクリーンショット撮影

gulpプラグインについてはこの辺なども参考に
- http://qiita.com/oreo3@github/items/0f037e7409be02336cb9
 
# TODO
- gulpのプラグインをひとめぐりしたい

# 参考
- http://gulpjs.com/plugins/
  - gulpプラグイン検索
