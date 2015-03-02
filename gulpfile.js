// Install gulp locally for all projects
// Then: npm install

var gulp  = require('gulp'),
  connect = require('gulp-connect');
  sass    = require('gulp-ruby-sass');
  prefix  = require('gulp-autoprefixer');
  watch   = require('gulp-watch');

gulp.task('connect', function() {
  connect.server();
});

gulp.task('styles', function() {
  return sass('scss/load.scss', { style: 'expanded' })
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['styles']);
});

gulp.task('serve', ['connect']);

gulp.task('sass', ['styles']);

gulp.task('default', [ 'connect', 'watch']);