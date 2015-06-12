angular.module('infoamigos')

.controller('LoginCtrl',
   function($scope, $state, AuthService) {

      $scope.user = {};

      $scope.signIn = function(user) {
         AuthService.login(user).then(function(res){
           console.log('logged in successfully');
           AuthService.setLoggedIn(res.data);
           $state.go('home');
         }, function(err) {
           alert('Invalid credentials');
         });
      };
   }
);