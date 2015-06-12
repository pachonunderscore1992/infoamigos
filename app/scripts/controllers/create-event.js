angular.module('infoamigos')

.controller('CreateEventCtrl',
   function($scope, $state, Events) {

      $scope.event = {
         date: new Date()
      };

      $scope.create = function() {
         $scope.data = {
            title: $scope.event.title,
            description: $scope.event.title,
            date: Number($scope.event.date),
            place: $scope.event.place
         };
         Events.create($scope.data).then(
            function(res) {
               $scope.event = {};
               $state.go('events');
            },
            function(error){
               console.log('error', error);
            }
         );
      };
   }
);