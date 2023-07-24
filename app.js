var app = angular.module("myMod",["ngRoute"]); 

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl:"home.html",
        controller:"homeC"
    }).when("/", {
        templateUrl:"sign.html",
        controller:"signC"
    }).when("/signup", {
        templateUrl:"signup.html",
        controller:"signC"
    }).when("/details", {
        templateUrl:"details.html",
        controller:"detailsC"
    }).when("/form", {
        templateUrl:"form.html",
        controller:"FormC"
    })
   
});

app.controller(
  "mainC",function($scope,$http,$location){
$scope.name="mansi"
  })
    