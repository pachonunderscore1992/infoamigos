angular.module('infoamigos')

.controller('TopicCtrl',
   function($scope, Materias) {
      $scope.loadMaterias = function(){
        $scope.materias = Materias.all();
      };
      $scope.loadMaterias();
   }
);