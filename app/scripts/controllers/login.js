angular.module('infoamigos')

.controller('LoginCtrl',
   function($rootScope, $scope, $state, Users) {
      $scope.signIn = function(user) {
         if(user && user.username && user.password) {
            $rootScope.user = Users.login(user.username, user.password);
            if($scope.user != null) {
               $state.go('app.home');
            }
         }
      };
   }
);