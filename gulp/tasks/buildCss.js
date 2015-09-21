'use strict';

// Compile sass and output css to /static/css
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    rename    = require('gulp-rename'),
    concat    = require('gulp-concat');

gulp.task('buildCss', function () {
  return gulp.src('./static/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('./static/css/application.css'))
    .pipe(minifyCSS())
    .pipe(rename('application.min.css'))
    .pipe(gulp.dest('./static/css/'));
});
