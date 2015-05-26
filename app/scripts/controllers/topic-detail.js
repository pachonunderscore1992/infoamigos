angular.module('infoamigos')

.controller('TopicDetailCtrl',
   function($scope, $stateParams, Posts, Topics) {
      $scope.topicId = $stateParams.topicId;
      $scope.loadTopic = function() {
         $scope.topic = Topics.getByCode($scope.topicId);
      };
      $scope.loadPosts = function(){
        $scope.posts = Posts.all($scope.topicId);
      };
      $scope.loadTopic();
      $scope.loadPosts();
   }
);