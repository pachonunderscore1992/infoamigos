angular.module('infoamigos')

.controller('CreateEventCtrl',
   function($scope, $state, Events) {
      $scope.create = function(event) {
         Events.create(event);
         $state.go('app.events');
      };
   }
);