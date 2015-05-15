angular.module('infoamigos')

.controller('SignInCtrl',
   function($rootScope, $scope, $state, Users) {
      $scope.signIn = function(user) {
         if(user && user.username && user.password) {
            $rootScope.user = Users.login(user.username, user.password);
            console.log($rootScope.user);
            if($scope.user != null) {
               $state.go('tabs.home');
            }
         }
      };
   }
);