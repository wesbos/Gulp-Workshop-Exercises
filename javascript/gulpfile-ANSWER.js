var gulp = require('gulp');
var p = require('gulp-load-plugins')();

gulp.task('scripts', function() {
    // create a filter
    var es6filter = p.filter(['scripts.js'], { restore : true });

    gulp.src(['scripts/plugins/jquery.js', 'scripts/plugins/fitvid.js', 'scripts/plugins/swipe.js','scripts/scripts.js'])
      // start sourcemaps
      .pipe(p.sourcemaps.init())
      // filter only for our ES6 file(s)
      .pipe(es6filter)
      // run babel on filtered subset
      .pipe(p.babel({
        presets: ['es2015']
      }))
      // restore
      .pipe(es6filter.restore)
      // continue on with life
      .pipe(p.concat('all.js'))
      .pipe(p.stripDebug())
      .pipe(p.uglify())
      .pipe(p.sourcemaps.write('.'))
      .pipe(gulp.dest('build/'))
});
