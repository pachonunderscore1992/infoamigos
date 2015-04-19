angular.module('infoamigos')

.controller('AccountCtrl',
   function($scope) {
      $scope.settings = {
         enableFriends: true
      };
   }
);