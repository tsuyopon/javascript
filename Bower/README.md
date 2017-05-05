# 概要
bowerの単純なサンプル

# 利用方法 
次の2つのコマンドを実行します。
```
$ npm install
$ bower install
```

例えば、jqueryの使い方としては次をHTMLから読み込ませるようにすれば良い
```
<script src="bower_components/jquery/dist/jquery.min.js"></script>
```

# MEMO: コマンドでbowerインストールする
```
# installs the project dependencies listed in bower.json
$ bower install
# registered package
$ bower install jquery
# GitHub shorthand
$ bower install desandro/masonry
# Git endpoint
$ bower install git://github.com/user/package.git
# URL
$ bower install http://example.com/script.js
```

# MEMO: bower.jsonを作る
npmと同じようにしてパッケージをインストールしたら、最後にbower initする。
```
$ bower install jquery   // 例
$ bower init
```

npmと同様に次のコマンドもあります。
```
$ bower install <package> --save
$ bower install <package> --save-dev
```

