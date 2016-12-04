var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');

gulp.task('build', function() {
  browserify({
    entries: 'client/App.js',
    extensions: ['.js'],
    debug: true
  })
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('static'));
});

gulp.task('start', function() {
  nodemon({
    tasks: ['build'],
    ignore: ['static/bundle.js'],
  });
});
