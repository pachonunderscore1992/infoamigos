angular.module('infoamigos')

.controller('EventsCtrl',
   function($scope, Events) {
      $scope.loadEvents = function() {
         $scope.events = Events.all();
      }
      $scope.loadEvents();
   }
);