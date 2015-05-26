angular.module('infoamigos')

.controller('ProfileCtrl',
   function($rootScope, $scope, $state, Users) {
      $scope.user = $rootScope.user;
   }
);