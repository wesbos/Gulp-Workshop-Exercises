var gulp = require('gulp');
var p = require('gulp-load-plugins')();

gulp.task('styles',function() {
  gulp.src('source/app.scss')
    .pipe(p.sass())
    .pipe(p.autoprefixer())
    .pipe(gulp.dest('./build/'))
});

gulp.task('scripts',function() {
  gulp.src('source/scripts.js')
    .pipe(p.uglify())
    .pipe(gulp.dest('./build/'))
});

gulp.task('watch',function() {
  gulp.watch('source/app.scss', ['styles']);
  gulp.watch('source/scripts.js', ['scripts']);
});

gulp.task('default',['styles', 'scripts', 'watch']);
