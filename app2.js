var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
    $scope.name = "Severus Snape";
})


app.controller('ExercisesController', function ($scope) {
    $scope.color = "rainbow";
    $scope.secondsInACentury = (100 * 365 * 24 * 60 * 60)
    $scope.rightNow = Date();
    $scope.date = new Date().getTime();
})
