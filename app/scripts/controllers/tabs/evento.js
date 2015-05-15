angular.module('infoamigos')

.controller('EventoCtrl',
   function($scope, Eventos) {
      $scope.loadEventos = function() {
         $scope.eventos = Eventos.all();
      }
      $scope.loadEventos();
   }
);