var gulp = require('gulp');
var clean = require('gulp-clean')

gulp.task('delete-files', function() {
    return gulp.src('css — копия/*')
        .pipe(clean())
});