//gulp configuration

var gulp = require('gulp');
var pug = require('gulp-pug');
var scss = require('gulp-sass');
var prettify = require('gulp-prettify');
var typescript = require('gulp-typescript');
var clean_css = require('gulp-clean-css');
var watch = require('gulp-watch');
var browser_sync = require('browser-sync');
var run = require('run-sequence');

var dir = './build';

gulp.task('html', () => {
    return gulp.src('./templates/*.pug')
    .pipe(pug())
    .pipe(prettify())
    .pipe(browser_sync.reload({stream:true}))
    .pipe(gulp.dest(dir));
});

gulp.task('scss', () => {
    return gulp.src('./scss/*.scss')
    .pipe(scss())
    .pipe(clean_css())
    .pipe(browser_sync.reload({stream:true}))
    .pipe(gulp.dest(dir+'/css'));
});

gulp.task('js', () => {
    return gulp.src('./ts/*.ts')
    .pipe(typescript({
        noImplicitAny:true,
        outFile:'main.js'
    }))
    .pipe(gulp.dest(dir+'/js'));
});

gulp.task('browser_sync', () => {
    browser_sync.init({server:{baseDir:dir}});
});

gulp.task('watch', () => {
    run('html', 'scss', 'js', 'browser_sync', () => {});
    gulp.watch('./templates/*.pug', ['html']);
    gulp.watch('./scss/*.scss', ['scss']);
    gulp.watch('./ts/*.ts', ['js']);
});

