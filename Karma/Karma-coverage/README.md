# 概要
Karmaを使ったカバレッジレポート取得サンプルです。
karma-coverageはistanbulというカバレッジレポート取得ツールを利用して作られたkarma用のプラグインです。

# インストール
今回の例としては、フレームワークとしてkarma-jasmineやその他のヘッドレスブラウザ実行しとして別途phantomjsを依存しているのでそれらを入れておきます。
```
$ npm install karma karma-jasmine karma-coverage
$ npm install phantomjs karma-phantomjs-launcher
```

karma.conf.jsに適切に設定を行う。特に次の４つがcoverageに大きな要因を与える設定になるので確認すること
- files
- preprocessors
- reporters
- coverageReporter

テストを実行するには次のようにします。--single-runを付与しないとプロンプトが戻ってきません。
```
$ nodejs ./node_modules/.bin/karma start --single-run
```

実行が終わったらkarma.conf.jsで設定した次のディレクトリにカバレッジレポートが格納されていますので、ブラウザなどから確認できます。
```
$ ls coverage/
```


