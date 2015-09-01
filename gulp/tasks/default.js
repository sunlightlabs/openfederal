'use strict';

// Run watch tasks by default

var gulp = require('gulp');

gulp.task('default', function () {
    gulp.start('watch');
});
