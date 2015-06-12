angular.module('infoamigos')

.controller('EventsCtrl',
   function($scope, Events) {
      $scope.loadEvents = function() {
         Events.getAll().then(
            function(res) {
               $scope.events = res.data;
            }, 
            function(error) {
               console.log('error',error);
            }
         );
      }
      $scope.loadEvents();
   }
);