// Modules 호출
var gulp = require('gulp'); // Gulp 모듈 호출

// Gulp 의 패키지 모듈 호출
var webserver = require('gulp-webserver'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minifyhtml = require('gulp-minify-html'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload');
	clean = require('gulp-clean');


//소스 경로
var src = 'publishing/';
var dist = 'public/';

var paths = {
	jspart: src + '/js/jspack/**/**/*.js',
	jsvender: src + '/js/jsvender/**/**/**/*.js',
	scss: src + '/scss/*.scss',
	scssWatch: src + '/scss/**/**/**/*.scss',
	img: src + '/images/**/**/**/*.*',
	fonts: src + '/fonts/**/**/**/*.*',
	html: src + '/**/*.html'
};


// 웹서버를 localhost:8000 로 실행한다.
gulp.task('server', function () {
	return gulp.src(dist + '/')
		.pipe(webserver());
});

// 결과물 폴더 청소(삭제)
gulp.task('clean-build', function () {
	return gulp.src(dist)
		.pipe(clean())
});

// 자바스크립트 파일을 하나로 합치고 압축한다.
gulp.task('combine-jspack', function () {
	return gulp.src(paths.jspart, {sourcemaps: true})
		.pipe(concat('script.min.js'))
		// .pipe(uglify())
		.pipe(gulp.dest(dist + '/js/jspack'));
});

// jsvender 파일복사
gulp.task('copy-jsvender', function () {
	return gulp.src(paths.jsvender)
		.pipe(gulp.dest(dist + '/js/jsvender'));
});

// fonts 파일복사
gulp.task('copy-fonts', function () {
	return gulp.src(paths.fonts)
		.pipe(gulp.dest(dist + '/fonts'));
});

// images 파일복사
gulp.task('copy-images', function () {
	return gulp.src(paths.img)
		.pipe(gulp.dest(dist + '/images'));
});

// sass 파일을 css 로 컴파일한다.
gulp.task('compile-sass', function () {
	return gulp.src(paths.scss)
		.pipe(sass())
		.pipe(gulp.dest(dist + '/css'));
});

// HTML 파일을 압축한다.
gulp.task('compress-html', function () {
	return gulp.src(paths.html)
	// .pipe(minifyhtml())
		.pipe(gulp.dest(dist + '/'));
});

// 파일 변경 감지 및 브라우저 재시작
gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(paths.jspart, ['combine-jspart']);
	gulp.watch(paths.scssWatch, ['compile-sass']);
	gulp.watch(paths.img, ['copy-images']);
	gulp.watch(paths.html, ['compress-html']);
	gulp.watch(dist + '/**').on('change', livereload.changed);
});

//기본 task 설정
gulp.task('default', [
	'server',
	'copy-jsvender',
	'copy-images',
	'combine-jspack',
	'copy-fonts',
	'compile-sass',
	'compress-html',
	'watch'
]);

//build 경로 청소 task
gulp.task('clean', [
	'clean-build'
]);
