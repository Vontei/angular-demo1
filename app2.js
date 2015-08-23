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


app.controller('passwordController', function($scope){
  $scope.password = {}
})


app.controller('camController', function($scope){
  $scope.cameras = [
  {
    title: "Nikon D3100 DSLR",
    image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: "Canon EOS 70D",
    image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: "Nikon D810A",
    image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }
]
})



app.controller('eventController', function ($scope) {
  $scope.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1
  }

  $scope.reverseText = function(){
    var result = $scope.revText.split('')
    var newRes = result.reverse()
    $scope.revText = newRes.join('');
  }
})



app.controller('pingController', function ($scope) {

  $scope.click = 0;

  $scope.playerOne = function(){
    if($scope.player1.score <= 10){
    $scope.player1.score += 1;
    $scope.click++

    }
  }

  $scope.playerTwo = function(){
    if($scope.player2.score <= 10){
    $scope.player2.score += 1;
    $scope.click++
  }
  }

  $scope.player1 = {
    score: 0,
    turn: 0
  }

  $scope.player2 = {
    score: 0,
    turn: 0
  }


  $scope.reset = function(){
    $scope.player1.score = 0;
    $scope.player2.score = 0;
  }


})



app.controller('contactController',function ($scope) {
  $scope.contactModel = {
    name: '',
    email: '',
    phone: '',
  }

  $scope.contacts = {
    name: 'Mylist',
    contacts : [
      {
        name: 'Nickolas',
        phone: 9708093456,
        email: 'lenick@nick.com'
      },
      {
        name: 'Bill',
        phone: 180099793,
        email: "billandTed@excellent.com"
      }
    ]
  }

  $scope.addContact = function(){
    $scope.newContact = {
      name: $scope.contact.name,
      email: $scope.contact.email,
      phone: $scope.contact.phone,
    }

    $scope.contacts.contacts.push($scope.newContact)
    $scope.contact.name = '';
    $scope.contact.email = '';
    $scope.contact.phone ='';
  }



})
