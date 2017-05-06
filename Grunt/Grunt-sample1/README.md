# 概要
サンプルとしてsassをコンパイルするgruntの例

# 使い方
実行すると次のエラーが表示される。
```
$ nodejs node_modules/.bin/grunt default
Running "sass:styles" (sass) task
Warning: 
You need to have Ruby and Sass installed and in your PATH for this task to work.
More info: https://github.com/gruntjs/grunt-contrib-sass
 Use --force to continue.

 Aborted due to warnings.
```

上記エラーが出るので、次のコマンドで予めrubygemsとsassをインストールしておく(gemでinstallしなくちゃいけないのはちょっとイケてない...)
```
$ sudo apt-get install rubygems
$ sudo gem install sass
```

次のコマンドで実行するとGruntfile.jsに記述された内容のとおりに実行します。  
今回だとsassディレクトリを読み込みコンパイルしてcssに出力します。
```
$ nodejs node_modules/.bin/grunt 
Running "sass:styles" (sass) task

Done.
$ ls css/
```

# 参考URL
- 公式サイト
  - https://gruntjs.com/
