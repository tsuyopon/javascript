# 概要
JavaScriptのTask Runnerで同様の競合としてはgulpが存在する。

# 使い方
```
$ npm install grunt grunt-cli
```

その後は利用するプラグインを入れる。標準タスクはたいていgrunt-contrib-xxxという名称です。

たとえば、次のようなプラグインがある。
- contrib-concat - ファイルを繋ぎ合わせる
- contrib-sass - Sassファイルをコンパイルする
- contrib-stylus - Stylusファイルをコンパイルする
- contrib-coffee - CoffeeScriptファイルをコンパイルする
- contrib-uglify - UglifyJSでJSをminifyする
- contrib-cssmin - CSSファイルをminifyする

# 参考URL
- https://github.com/codegrid/codegrid-grunt
  - githubにgruntを利用したすぐに使えそうなサンプルが10個以上ある

# URL
- 公式サイト
  - https://gruntjs.com/
