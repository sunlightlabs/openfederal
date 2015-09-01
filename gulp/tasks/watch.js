'use strict';

// Watch changes to files to run tasks

var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('./app/static/js/*.js', ['buildJs']);
  gulp.watch('./app/static/sass/**', ['buildCss']);
});
