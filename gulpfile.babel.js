require('babel-core/register');

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
const jasmine = require('gulp-jasmine');
const sass    = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task("transpile", () => {

  return browserify("src/js/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));

});

gulp.task("watch", ["transpile"], () => {
  gulp.watch("src/**/*.js", ["transpile"]);
});

gulp.task('test', () => {
  gulp.src(['src/js/*.js','spec/*.js'])
  // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(jasmine());
});

gulp.task("default", ["transpile"]);
