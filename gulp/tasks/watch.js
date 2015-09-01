'use strict';

// Watch changes to files to run tasks

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('./static/js/*.js', ['buildJs']);
  gulp.watch('./static/sass/**', ['buildCss']);
});
