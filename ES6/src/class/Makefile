# このディレクトリのjsを変換してlibに配置することが可能
all:
	nodejs node_modules/.bin/babel src ./*.js --out-dir lib

# 特定の依存する２つを同名称でlib配下に配置も可能
# import, exportの双方の２つをビルドして実行するときに便利
named_export:
	nodejs node_modules/.bin/babel src _named_export.js named_export.js --out-dir lib
