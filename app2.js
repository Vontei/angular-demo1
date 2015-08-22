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

app.controller('directivePractice', function ($scope) {
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"]
  $scope.numbers = [1,1,2,5,6,9,9,9];
  $scope.address = {
    street: '1451 24th Street',
    city: 'Denver',
    state: 'CO',
    zip: 80205
  }
})
