angular.module('infoamigos')

.controller('PlacesCtrl',
   function($scope, Places) {
      $scope.loadPlaces = function() {
         $scope.places = Places.all();
      }
      $scope.loadPlaces();
   }
);