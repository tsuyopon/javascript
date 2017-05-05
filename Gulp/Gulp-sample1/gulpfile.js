var gulp = require("gulp");
var sass = require("gulp-sass");
 
gulp.task("sass", function() {     // タスク名に"sass"を指定してタスクの登録を行う
    gulp.src("sass/**/*scss")      // 読み出すファイルを指定する
        .pipe(sass())              // 行う処理を記述します。今回はsass()なのでsassのコンパイルとなります。
        .pipe(gulp.dest("./css")); // 出力先を指定します。
});
