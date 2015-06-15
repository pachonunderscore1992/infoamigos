angular.module('infoamigos')

.controller('ProfileCtrl',
   function($scope, $window, Users) {

      $scope.findUser = function() {
         for (var i = $scope.users.length - 1; i >= 0; i--) {
            if ($scope.users[i].userName == $scope.userName) {
               $scope.user = $scope.users[i];
            }
         };
      };

      $scope.loadUsers = function() {
         Users.getAll().then(
            function(res) {
               $scope.users = res.content;
               console.log(res.content);
               $scope.findUser();
            },
            function(error) {

            }
         );
      };

      $scope.userName = $window.sessionStorage.principal;

      $scope.user = {};

      $scope.users = [];

      $scope.loadUsers();

   }
);
