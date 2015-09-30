// Load in gulp
var gulp = require('gulp');

// load all plugins into the p variable
var p = require('gulp-load-plugins')();

gulp.task('templates',function(){
  gulp.src('./source/*.jade')
    // turn it from jade into HTML
    .pipe(p.jade())
    // put it in the build directory
    .pipe(gulp.dest('./build/'));
});

gulp.task('scripts', function() {
  // here we use an array for gulp.src because the order of plugins in important
  gulp.src(['source/scripts/plugins/*.js', 'source/scripts/scripts.js'])
    // uglify it
    .pipe(p.uglify())
    // concat it
    .pipe(p.concat('all.min.js'))
    // put it in the scripts directory
    .pipe(gulp.dest('./build/scripts'));
});


gulp.task('styles',function() {
  gulp.src('./source/style.scss')
      // turn from sass to CSS
      .pipe(p.sass())
      // add vendor prefixes
      .pipe(p.autoprefixer())
      // put it in the build directory
      .pipe(gulp.dest('./build/css'));
});


gulp.task('watch',function() {
  gulp.watch('./source/scripts/**/*.js',['scripts']);
  gulp.watch('./source/**/*.jade',['templates']);
  gulp.watch('./**/*.scss',['styles']);
});


gulp.task('default',['templates','scripts','styles','watch']);
