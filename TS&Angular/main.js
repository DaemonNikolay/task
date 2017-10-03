// angular.module('app', []).controller('myCtrl', function($scope) {
//     $scope.hello = "Helllo";
// });

var app = angular.module('app', []);
app.directive('foo', function() {
    return function(scope, element, attrs) {
        console.log("This");
    };
});


// function forExampleController($scope) {
//     $scope.word = "Habrahabra"
// }

// angular.module('helloHabrahabr', [])
//     .directive('habraHabr', function() {
//         return function($scope, element, attrs) {
//             /*Задаем функцию, которая будет вызываться при изменении переменной word, ее имя находится в attrs.habraHabr*/
//             $scope.$watch(attrs.habraHabr, function(value) {
//                 element.text(value + attrs.habra);
//             });
//         }
//     });