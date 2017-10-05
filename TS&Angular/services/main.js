var someModule = angular.module('someModule', []);

someModule.value('someValue', 55);

someModule.constant('someConst', 105);

someModule.value('value0', 77);
someModule.service('someService', function(value0) {
    this.someVal = value0;
});

someModule.factory('someFactory', function() {
    var someVal = 25;

    return {
        returnedSomeVal: someVal
    }
});

someModule.provider('someProvider', function() {
    var val = 36;

    this.$get = function() {
        return val;
    }
});

someModule.run(function(someValue, someConst, someService, someFactory, someProvider) {
    console.log("Const: " + someConst);

    console.log("Value: " + someValue);

    console.log("Service: " + someService.someVal);

    console.log("Factory: " + someFactory.returnedSomeVal);

    console.log("Provider: " + someProvider);
});