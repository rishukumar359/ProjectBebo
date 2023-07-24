var app = angular.module("myMod");
app.controller("detailsC", function ($scope, $http, $location) {
  $scope.goToDetails = function () {
    console.log("edbgweyvkyu");
    alert("hos");
    $location.path("/details");
  };
  $scope.goToSign = function () {
    alert("hos");
    $location.path("/sign");
  };
  

  $http.get("http://localhost:3000/intern").then(function (response) {
    console.log(response);
    console.log(response);
    $scope.data = response.data;
  });
  $scope.getdata = function () {
    $http.get("http://localhost:3000/intern").then(function (response) {
      console.log(response);
      console.log(response);
      $scope.data = response.data;
    });
  };

  $scope.postdata = function (
    id,
    batch,
    firstname,
    lastname,
    email,
    date,
    role
  ) 

  
  
  {

    
    var data = {
      id: id,
      batch: batch,
      firstname: firstname,
      lastname: lastname,
      email: email,
      date: date,
      role: role
    }; 

   
    $http.patch("http://localhost:3000/Intern/"+ id, data).then(function (response) {
      $location.path("/details")
      console.log(response.name);
      $scope.name = response.name;
      $scope.age = response.age;
    });
  };

  $scope.deletedata = function (id) {
    console.log(id);

    $http
      .delete("http://localhost:3000/Intern/" + id)
      .then(function (response) {
        console.log(id);
      });
  };

  $scope.updatedata = function (id) {
    $http.get("http://localhost:3000/Intern/" + id).then(function (response) {
      console.log(response);
      $scope.id = id;
      $scope.batch = response.data.batch;
      $scope.firstname = response.data.firstname;
      $scope.lastname = response.data.lastname;
      $scope.email = response.data.email;
      $scope.date = response.data.date;
      $scope.role = response.data.role;
      $scope.editid = response.data.id;
    });
  };

  $scope.goToDetails = function () {
    alert("iuhu");
    $location.path("/details");
  };
});
