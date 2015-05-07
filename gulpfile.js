var gulp = require('gulp');
var sass = require('gulp-sass');
var minify_css = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
      .pipe(sass())
      .pipe(minify_css())
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass']);
