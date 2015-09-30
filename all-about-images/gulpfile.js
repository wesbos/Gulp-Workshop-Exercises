var gulp = require('gulp');
var p = require('gulp-load-plugins')();

// Load in the ones you want
var imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('images', function() {
  return gulp.src('source-images/*')
    .pipe(p.imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      multipass: true,
      svgoPlugins: [{removeViewBox: true}],
      use: [imageminMozjpeg()]
    }))
    // .pipe(p.imagemin({
    //   use: [imageminMozjpeg()]
    // }))
    .pipe(gulp.dest('compressed-images/'));
});

var del = require('del');

gulp.task('clean', function() {
  del('compressed-images/');
});
