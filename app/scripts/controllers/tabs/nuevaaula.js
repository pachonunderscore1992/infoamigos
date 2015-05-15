angular.module('infoamigos')

.controller('NuevaAulaCtrl',
   function($scope, Aulas) {
      $scope.create = function(aula) {
         Aulas.create(aula);
         console.log(Aulas.all());
         $state.go('tabs.aulas');
      };
   }
);