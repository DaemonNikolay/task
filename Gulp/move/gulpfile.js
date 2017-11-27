var gulp = require('gulp');


gulp.task('move', function() {
    return gulp.src('css/*.+(css)')
        .pipe(gulp.dest('path/to'))
});