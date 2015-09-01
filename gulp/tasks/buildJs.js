'use strict';

// Compile javascript and output to application.js in /static/js/dist

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename    = require('gulp-rename');


gulp.task('buildJs', function() {
  return gulp.src("./static/js/*.js")
    .pipe(concat('./static/js/dist/application.js'))
    .pipe(uglify())
    .pipe(rename('application.min.js'))
    .pipe(gulp.dest('./static/js/dist/'))
});
