var gulp = require( 'gulp' );
var postcss = require( 'gulp-postcss' );
var cssnext = require( 'cssnext' );
var quantityQueries = require('postcss-quantity-queries');

gulp.task( 'css', function() {
    gulp.src( 'css-next.css' )
        .pipe( postcss([cssnext(), quantityQueries]) )
        .pipe( gulp.dest( 'build/' ) )
});
