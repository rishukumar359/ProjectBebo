var mainApp = angular.module("myMod");
      mainApp.controller("FormC", function ($scope, $http,$location) {
        $scope.reset = function () {
          ($scope.id = null),
            ($scope.batch = null),
            ($scope.firstname = null),
            ($scope.lastname = null),
            ($scope.email = null),
            ($scope.date = null),
            ($scope.role = null);
        };
        $scope.postdata = function (
          id,
          batch,
          firstname,
          lastname,
          email,
          date,
          role
        ) {
          var data = {
            id: id,
            batch: batch,
            firstname: firstname,
            lastname: lastname,
            email: email,
            date: date,
            role: role,
          };

          $http
            .post("http://localhost:3000/intern", data)
            .then(function (response) {
              console.log(response.name);
              alert("details added successfully")
              $location.path("/details")
              $scope.reset();
            });
        };
        $scope.reset();
      });