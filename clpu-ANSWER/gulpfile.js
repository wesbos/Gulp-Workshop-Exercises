var gulp = require('gulp');
var p = require('gulp-load-plugins')();

gulp.task('styles',function(){
  gulp.src('source/css/style.styl')
    .pipe(p.sourcemaps.init())
    .pipe(p.stylus())
    .pipe(p.autoprefixer())
    .pipe(p.sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
});

