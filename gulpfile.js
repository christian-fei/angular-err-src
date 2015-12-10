var gulp = require('gulp')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')
  , buffer = require('vinyl-buffer')
  , uglify = require('gulp-uglify')
  , umd = require('gulp-umd')

gulp.task('build', function() {
  var browserifyStream = browserify({
        entries: 'src/index.js',
        insertGlobals: false,
        debug: false,
      })
  return browserifyStream.bundle()
    .pipe(source('angular-err-src.min.js'))
    .pipe(umd({
      exports: function(file) {return 'AngularErrSrc'},
    }))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})
