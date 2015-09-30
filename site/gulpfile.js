var gulp = require('gulp');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglifyjs');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer-core');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var filter = require('gulp-filter');
var debug = require('gulp-debug');

gulp.task('templates',function(){
  gulp.src('./*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./build/'));
});

gulp.task('scripts', function() {
  gulp.src('./scripts/*.coffee')
    .pipe(sourcemaps.init())
    // convert from coffeescript
    .pipe(coffee({bare : true}))
    // sourcemaps
    .pipe(sourcemaps.write())
    // uglify it
    // .pipe(uglify('all.js'))
    .pipe(gulp.dest('./build/scripts'));
});


gulp.task('styles',function() {
  gulp.src('./*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./build/css'))
      .pipe(filter('**/*.css'))
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest('./build/css'))
});


gulp.task('watch',function() {
  gulp.watch('./scripts/*.coffee',['scripts']);
  gulp.watch('./*.jade',['templates']);
  gulp.watch('./*.scss',['styles']);
});


