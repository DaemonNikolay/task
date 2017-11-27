module.exports = function() {

    var compiler = require('less-compile-file')

    gulp.task('compile', function() {
        compiler('css — копия (2)/file.less', 'css — копия (2)/file.css')
            .catch((err) => {
                console.error(err);
            })
            .then((results) => {
                console.log('Compiling completed!')
                console.log(results.source)
                console.log(results.destination)
                console.log(results.code)
            })
    });

}