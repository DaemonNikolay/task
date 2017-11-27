module.exports = function(gulp) {


    var clean = require('gulp-clean')

    gulp.task('delete-files', function() {
        return gulp.src('css — копия/*')
            .pipe(clean())
    });

}