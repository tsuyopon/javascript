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

### HTML
- gulp-minify-html
  - HTMLファイルを圧縮します。
- gulp-ejs
  - EJS形式で書かれたファイルをHTMLに変換します

# TODO
- gulpのプラグインをひとめぐりしたい

# 参考
- http://gulpjs.com/plugins/
  - gulpプラグイン検索
