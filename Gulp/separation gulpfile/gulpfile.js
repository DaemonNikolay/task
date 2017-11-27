var gulp = require('gulp');
var wrench = require('wrench');

wrench.readdirSyncRecursive('gulp-tasks/').filter(function(file) {
        return ('js').test(file);
    })
    .map(function(file) {
        require('gulp-tasks/' + file);
    });