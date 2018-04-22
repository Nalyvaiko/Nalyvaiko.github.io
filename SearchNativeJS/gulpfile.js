'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css')
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var uglifyjs = require('gulp-uglifyjs');
var htmlreplace = require('gulp-html-replace');

 
gulp.task('copyfiles', function(){
	gulp.src('src/css/ie8.css')
		.pipe(gulp.dest('build/css'));
		gulp.src('src/img/*.*')
		.pipe(gulp.dest('build/img/'));
		gulp.src('src/css/ie8.css')
		.pipe(gulp.dest('build/css'));
		gulp.src('src/css/pie.htc')
		.pipe(gulp.dest('build/css'));		
		gulp.src('src/js/ie8.js')
		.pipe(gulp.dest('build/js'));
		gulp.src('src/*.js')
		.pipe(gulp.dest('build/'));
})

gulp.task('styles', function(){
	gulp.src('src/styles/styles.scss')
	    .pipe(sass().on('error', sass.logError))
    	.pipe(rename('style.css'))
    	.pipe(gulp.dest('src/css/'));
	gulp.src(['!src/css/ie8.css', 'src/css/*.css'])
		.pipe(concatCss('main.css'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('build/css'));
});
 
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(concat('main.min.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('build/js/'));
});

gulp.task('htmledit', function(){
	return gulp.src('src/index.html')
    	.pipe(htmlreplace({
        	'css': 'css/main.min.css',
        	'js': 'js/main.min.js'
    	}))
    	.pipe(gulp.dest('build/'));
});

gulp.task('copy', ['copyfiles']);
gulp.task('style', ['styles']);
gulp.task('script', ['scripts']);
gulp.task('html', ['htmledit']);
gulp.task('default', ['copy', 'style', 'script', 'html']);
