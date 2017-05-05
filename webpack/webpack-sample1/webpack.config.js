module.exports = {
  context: __dirname + '/src',

  // アプリケーションのエントリポイントとなるファイルのパスを指定
  entry: {
    js: "./main.js"
  },

  // path: 生成されるファイルのパスを絶対パスで指定します。, filename: 生成されるファイルの名前を指定します
  output: {
    path: __dirname + '/tmp',
    filename: "./output.js"
  },

/*
  // 使用するローダーを指定します。ローダーとはプラグインのようなもので、例えばbabelを指定したらES6をES5にトランスパイルしたりというのがファイル生成時に自動で行われます。
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
*/
}
