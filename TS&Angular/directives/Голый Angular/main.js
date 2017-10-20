var app = angular.module('app', []);
app.directive('new', function() {
    return {
        link: function(scope, element, attrs) {
            console.log('This is text');
        }
    }
});