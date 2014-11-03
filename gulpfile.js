var gulp = require('gulp');
var sass = require('gulp-sass');
var minify_css = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
      .pipe(sass())
      .pipe(minify_css({keepBreaks:true}))
      .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass']);
