'use strict';

// Start up a server

var gulp = require('gulp'),
    connect = require('gulp-connect');
 
gulp.task('connect', function() {
    connect.server({
        root: ['./'],
        port: 8080
    });
});
 
gulp.task('default', ['connect']);
