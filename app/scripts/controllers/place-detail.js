angular.module('infoamigos')

.controller('PlaceDetailCtrl',
   function($scope, $stateParams, Places) {

      $scope.placeId = $stateParams.placeId;

      $scope.loadPlace = function() {
         Places.get($scope.placeId).then(
            function(res) {
               $scope.place = res.data;
            },
            function(error){
               console.log('error',error);
            }
         );
      };

      $scope.loadPlace();

   }
);