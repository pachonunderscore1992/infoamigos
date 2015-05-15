angular.module('infoamigos')

.controller('NuevaMateriaCtrl',
   function($scope,$state, Materias) {
      $scope.create = function(materia) {
         Materias.create(materia);
         console.log(Materias.all());
         $state.go('tabs.topics');
      };
   }
);