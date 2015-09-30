var gulp = require( 'gulp' );

// Async with a callback
gulp.task( 'async1', function() {
  console.log( 'Starting async1' );
  setTimeout( function() {
    console.log( "finished Async 1" );

    // cb();
  }, 6000 );
} );

// Async with a callback
gulp.task( 'async2', function( cb ) {
  console.log( 'Starting async2' );
  setTimeout( function() {
    console.log( "finished Async 2" );
    cb();
  }, 2000 );
} );
