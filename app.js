/**
 * App Module Init
 * @type Angular Module
 */
var App = angular.module('colPick', ['angularColpick']);

App.controller('colPickCtrl', ['$scope', function ($scope){
    
    $scope.color = "#808080";

    $scope.$watch('color', function(newValue, oldValue, scope) {
        console.log($scope.color);
    });

}]);