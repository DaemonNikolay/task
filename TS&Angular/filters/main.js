var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
    $scope.to = "1005";
});

app.filter('after', function() {
    return function(fil) {
        console.log('fil', fil);
        return 30000;
    };
});