angular.module('infoamigos')

.controller('NuevoEventoCtrl',
   function($scope, $state, Eventos) {
      $scope.create = function(evento) {
         Eventos.create(evento);
         console.log(Eventos.all());
         $state.go('tabs.eventos');
      };
   }
);