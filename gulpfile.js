var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  return browserify('./index.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});
