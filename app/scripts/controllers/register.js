angular.module('infoamigos')

.controller('RegisterCtrl',
   function($scope, $state, Users) {
      $scope.signUp = function(user) {
         Users.signUp(user);
         $state.go('login');
      }
   }
);