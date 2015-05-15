angular.module('infoamigos')

.controller('AulaCtrl',
   function($scope, Aulas) {
      $scope.loadAulas = function() {
         $scope.aulas = Aulas.all();
      }
      $scope.loadAulas();
   }
);