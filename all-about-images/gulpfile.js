var gulp = require('gulp');
var p = require('gulp-load-plugins')();

// Load in the ones you want
var imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('images', function() {
  
});

var del = require('del');

gulp.task('clean', function() {
  del('compressed-images/');
});
