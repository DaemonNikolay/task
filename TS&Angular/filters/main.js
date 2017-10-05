var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
    $scope.money = "1005";
});

app.filter('moneyFilter', function() {
    return function(str) {
        console.log('str', str);
        return 10500;
    };
});