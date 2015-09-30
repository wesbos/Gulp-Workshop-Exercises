var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
 
gulp.task('inlinesource', function () {
    
    var options = {
        compress: false
    };
 
    return gulp.src('./src/*.html')
        .pipe(inlinesource(options))
        .pipe(gulp.dest('./out'));
});
