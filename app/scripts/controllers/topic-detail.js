angular.module('infoamigos')

.controller('TopicDetailCtrl',
  function($scope, $stateParams, Posts, Topics) {

      $scope.topicId = $stateParams.topicId;

      $scope.data = {
         topic_id: $scope.topicId
      };

      $scope.loadPosts = function(){
         Topics.getPosts($scope.topicId).then(
            function(res) {
               $scope.posts = res.data;
            },
            function(error){
               console.log('error',error);
            }
         ).finally(
            function(){
            $scope.$broadcast('scroll.refreshComplete');
          }
         );
      };
      $scope.loadPosts();
    
      $scope.createPost = function() {
        Posts.create($scope.data).then(
            function(res){
               console.log(res);
               $scope.loadPosts();
            },
            function(error){
               console.log('error',error);
            }
          ).finally(function(){
               $scope.data = {
                  topic_id: $scope.topicId
               };
          });
      };
   }
);