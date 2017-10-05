var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    });
});

myApp.controller('mainController', function($scope) {
    $scope.name = 'Main controller';
});

myApp.controller('secondController', function($scope, $routeParams) {
    $scope.name = 'Second controller';
    $scope.value = $routeParams.num || 1;
});