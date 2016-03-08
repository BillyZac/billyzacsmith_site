var config = require('./gulp.config')()
var browserSync = require('browser-sync')
var del = require('del')
var gulp = require('gulp')
var protractor = require("gulp-protractor").protractor
var sass = require('gulp-sass')
var webpack = require('gulp-webpack')

gulp.task('sass', ['clean-styles'], function () {
  console.log('Compiling Sass found here: ' + config.sass)
  console.log('And piping it here: ' + config.css)
  return gulp
    .src(config.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.css))
})

gulp.task('clean-styles', function() {
  var files = config.temp + '**/*.css'
  console.log('Deleting previously generated CSS: ' + files)
  clean(files)
})

gulp.task('watch-sass', function() {
  gulp.watch([config.sass], ['sass'])
})

gulp.task('start', ['sass', 'watch-sass'], function() {
  startBrowserSync()
})

gulp.task('integration-test', function() {
  gulp.src(["protractor.spec.js"])
    .pipe(protractor({
        configFile: "protractor.config.js",
        args: ['--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function(e) { throw e })
})

//////////////////////
function startBrowserSync() {
  if (browserSync.active) {
    return
  }
  console.log('Starting browserSync')
  browserSync.init({
      server: { baseDir: "./public/" }
  })
  gulp.watch("./public/**/*").on('change', browserSync.reload)
}

// Should pass in a callback to make sure it executes before 'sass'
function clean(path) {
  console.log('Cleaning up this stuff: ' + path);
  del(path)
}
