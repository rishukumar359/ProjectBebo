var app = angular.module("myMod"); 
// app.run(function($rootSCope,$location){
//   console.clear()
//   console.log("running")
// })

app.controller(
  "signC",
  function ($scope, $http,$location) {   
    $scope.id=null,
    $scope.name=null,
    
    $scope.email=null,
   
    $scope.role=556667,
    $scope.password=null
    $scope.username=null
  
  

    $scope.signuppath = function(){ 
     
      $location.path("/signup")
      
    }
    $scope.signinpath = function(){ 
     
      $location.path("/")
      
    }


    $scope.signup = function (id,name, email, password) {
      var data = {
        id:id,
        name: name,
        email: email,
        password: password,
      };
      console.log(JSON.stringify(data.name));
      $http.post("http://localhost:3000/sign", data).then(function (response) {
        alert("sigu up successfully")
        
       
      });
    };

    
    

    $scope.signin = function (id,email, password) {  
        console.log(id);
        console.log(email);
        console.log(password);
       
     

      $http.get("http://localhost:3000/sign/"+id).then(function (response) {
       
        console.log(response.data);  
        if(response.data.email==email && response.data.password==password){
          username=response.data.name
           alert("WelCome" + "  "  + username)
           console.log(response.data.name)
           console.log(username)
            // $location.path("/home")
        } 
        else{
          alert("Invalid User")
        }
        
      });
    };

  }
);
