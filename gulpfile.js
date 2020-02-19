'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minify = require('gulp-clean-css'),
    webpack = require('webpack-stream'),
    through = require('through'),
    path = require('path'),
    webpackConfig = require('./webpack.config');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(through(function (file) {
            file.named = path.basename(path.dirname(file.path).split("/").pop(), path.extname(file.path));
            this.queue(file);
        }))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('webpack', () => {
    return gulp.src('src/**/index.js')
        .pipe(through(function (file) {
            file.named = path.basename(path.dirname(file.path).split("/").pop(), path.extname(file.path));
            this.queue(file);
        }))
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build', gulp.parallel('sass', 'webpack'));
