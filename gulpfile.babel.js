require('babel-core/register');

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
const jasmine = require('gulp-jasmine');
const sass    = require('gulp-sass');
const Server  = require('karma').Server;

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

gulp.task('npmtest', () => {
  gulp.src(['src/js/*.js','spec/*.js'])
  // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(jasmine());
});

/**
 * Run test once and exit
 */
gulp.task('test', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task("default", ["transpile"]);
