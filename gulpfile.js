var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

var path = {
scssFiles: ['./public/*.scss']
}
var finalPath = ['./public/*.css']
gulp.task('clean', function () {
    return gulp.src(finalPath)
        .pipe(clean());
});
gulp.task('sass', function () {
    return gulp.src(path.scssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public'));
})
gulp.task('watch', function () {
    gulp.watch(path.scssFiles, ['sass']);
})
gulp.task('default', function () {
    runSequence(
        'clean',
        'sass',
        'watch'
    );
});