angular.module('infoamigos')

.controller('TopicsCtrl',
   function($scope, Topics) {
      $scope.loadTopics = function(){
        $scope.topics = Topics.all();
      };
      $scope.loadTopics();
   }
);