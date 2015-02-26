
var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var karma   = require('gulp-karma');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');


gulp.task('minify', function () {
  gulp.src('temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));

gulp.src('./index.html')
  .pipe(minifyHTML())
  .pipe(gulp.dest('./minified/'))

gulp.src('./*.css')
  .pipe(minifyCSS({keepBreaks:true}))
  .pipe(gulp.dest('./minified/'))
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});