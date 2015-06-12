angular.module('infoamigos')

.controller('PlacesCtrl',
   function($scope, Places) {
      $scope.loadPlaces = function() {
         Places.getAll().then(
            function(res) {
               $scope.places = res.data;
            },
            function(error){
               console.log('error', error);
            }
         );
      }
      $scope.loadPlaces();
   }
);