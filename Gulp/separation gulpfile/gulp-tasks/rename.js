module.exports = function(gulp) {

    var rename = require('gulp-rename');

    gulp.task('move-and-rename', function() {
        return gulp.src('css/*.+(css)')
            .pipe(rename({ prefix: 'min_' }))
            .pipe(gulp.dest('path/to'))
    });
}