var gulp = require('gulp');
var jade = require('gulp-jade');

var config = require('./config'); // gets the object in config.js

gulp.task('templates',function(){
  gulp.src(['*.jade','!layout.jade'])
    .pipe(jade({
      pretty : true,
      locals : config // pass that config object
    }))
    .pipe(gulp.dest('build/'))
});


gulp.task('watch', function() {
  gulp.watch(['**/*.jade', 'config.js'], ['templates']);
});

gulp.task('default',['templates', 'watch']);
