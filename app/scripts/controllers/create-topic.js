angular.module('infoamigos')

.controller('CreateTopicCtrl',
   function($scope, $state, Topics) {
      $scope.create = function(topic) {
         Topics.create(topic);
         $state.go('topics');
      };
   }
);