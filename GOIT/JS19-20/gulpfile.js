var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    browserSync  = require('browser-sync'),
    del          = require('del');
    imagemin     = require('gulp-imagemin');
    pngquant     = require('imagemin-pngquant');
    cache        = require('gulp-cache');

gulp.task('sass', function () {
  return gulp.src('src/components/main.scss')
             .pipe(sass())
             .pipe(autoprefixer(['last 15 versions', '> 1%', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'], {cascade: true}))
             .pipe(rename('style.min.css'))
             .pipe(cssnano())
             .pipe(gulp.dest('dist/css'))
             .pipe(browserSync.reload({stream: true}));
});

gulp.task('json', function() {
  return gulp.src('src/js/*.json')
             .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
             .pipe(concat('app.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('dist/js'))
             .pipe(browserSync.reload({stream: true}));
});

gulp.task('pages', function () {
  return gulp.src('src/index.html')
             .pipe(gulp.dest('dist'))
             .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function() {
  return gulp.src('src/theme/img/**/*')
             .pipe(cache(imagemin({
               interlaced: true,
               progressive: true,
               svgoPlugins: [{removeViewBox: false}],
               use: [pngquant()]
             })))
             .pipe(gulp.dest('dist/img'))
             .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {baseDir: 'dist'},
    notify: false
  });
});

gulp.task('clean', function() {
  return del.sync('dist');
});

gulp.task('clear', function() {
  return cache.clearAll();
});

// gulp.task('watch', ['clean', 'clear'], function() {
//   gulp.start('pages', 'sass', 'scripts', 'img', 'browser-sync');
//   gulp.watch('src/components/**/*.scss', ['sass']);
//   gulp.watch('src/index.html', ['pages']);
//   gulp.watch('src/js/*.js', ['scripts']);
//   gulp.watch('src/theme/img/**/*', ['img']);
// });

gulp.task('watch', ['pages', 'sass', 'scripts', 'img', 'browser-sync'], function() {
  gulp.watch('src/components/**/*.scss', ['sass']);
  gulp.watch('src/index.html', ['pages']);
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/theme/img/**/*', ['img']);
});
