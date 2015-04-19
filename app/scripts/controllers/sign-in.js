angular.module('infoamigos')

.controller('SignInCtrl',
   function($scope, $state, Chats) {
      console.log(Chats.all());
      console.log(":P");
      $scope.signIn = function(user) {
         console.log('Sign-In', user);
         $state.go('tabs.home');
      };
   }
);