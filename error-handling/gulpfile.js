var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


gulp.task('styles', function() {
  gulp.src('style.scss')
    .pipe(sass())
    .pipe(gulp.dest('style.css'))
});

gulp.task('watch',function() {
  gulp.watch('style.scss',['styles']);
});
