angular.module('infoamigos')

.controller('CreatePlaceCtrl',
   function($scope, $state, Places) {
      $scope.create = function(place) {
         Places.create(place);
         $state.go('app.places');
      };
   }
);