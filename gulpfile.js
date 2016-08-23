var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var css = require('browserify-css');
var uglify = require('gulp-uglify');

gulp.task('browserify', function () {
    var b = browserify({
        entries: ['./src/loading-spinner.js'],
        transform: [css]
    });
    return b.bundle()
        .on('error', function (e) {
            console.log(e);
        })
        .pipe(source('loading-spinner.min.js'))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('build-js', ['browserify'], function () {
    return gulp
        .src('./dist/loading-spinner.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
})

gulp.task('default', ['build-js'], function () {
})

gulp.task('watch', function () {
    var watcher = gulp
        .watch(['src/**/*.js', 'src/**/*.html', 'src/**/*.css'], ['build-js']);

    watcher.on('change', function(event){
        console.log(event);
    })
})