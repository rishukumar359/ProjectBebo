var app = angular.module("myMod", []);
app.controller(
  "myController",
  function ($scope, $http) {
    // $scope.name = null;
    // $scope.age = null;
    // $scope.rishu = "Rishu";
    // $scope.id; 
    // $scope.newid=null 
    $scope.value = 25000;

    

    $scope.postdata = function (id, name, age,editid) {
      console.log(id);
      
      var data = {
        name: name,
        age: age,
      };
      console.log(id);
      console.log(name);
      console.log(age);
      if (editid) {
        $http
          .patch("http://localhost:3000/users/" + id, data)
          .then(function (response) {
            console.log(id);
            console.log(response);
          });
      } else {
        $http
          .post("http://localhost:3000/users", data)
          .then(function (response) {
            
            $scope.name = response.name;
            $scope.age = response.age;
          });
      }
    };

    $scope.deletedata = function (id) {
      console.log(id);

      $http
        .delete("http://localhost:3000/users/" + id)
        .then(function (response) {
          console.log(id);
          console.log(response);
        });
    };

    $scope.updatedata = function (id, name, age) {
      console.log(id);
      $scope.edit=true

      $http.get("http://localhost:3000/users/" + id).then(function (response) {
        console.log(response);
        $scope.id = id;
        $scope.name = response.data.name;
        $scope.age = response.data.age; 
        $scope.editid=response.data.id;
      });
    };

    $http.get("http://localhost:3000/users").then(function (response) {
      console.log(response);
      console.log(response.data);
      $scope.data = response.data;
    });
  },

  function ($scope, $location, $interval, $timeout, $window) {
    $scope.value = 25000;
    $scope.url = $location.absUrl();
    $scope.port = $location.port();
    $scope.date = new Date();
    // $scope.data=[
    //     {name:'sardar khan',age:40},
    //     {name:'faisal khan',age:25},
    // {name:'ramadhir singh',age:60}
    // ]

    $interval(function () {
      $scope.count++;
    }, 1000);

    $timeout(function () {
      $scope.value = 500000;
    }, 2000);

    $scope.DisplayPrompt = function () {
      var fname = $window.prompt(" Hello ,enter your  name");
      $window.alert("full name is " + fname);
    };

    $scope.filterFunction = function (x) {
      $scope.order = x;
    };
    $scope.count1 = 0;
    $scope.count1fun = function () {
      $scope.count1++;
    };
  }
);
