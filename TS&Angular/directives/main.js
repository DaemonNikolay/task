var app = angular.module('app', []);
app.directive('foo', function() {
    return {
        link: function(scope, element, attrs) {
            console.log('This is');
        }
    }
});