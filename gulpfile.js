//Initialize modules
var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

function style() {
  return gulp
    .src("./assets/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./assets/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./assets/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
