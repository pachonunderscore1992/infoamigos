angular.module('infoamigos')

.controller('TopicCommentsCtrl',
   function ($scope, $stateParams, Posts, Comments) {

      $scope.postId = $stateParams.postId;

      $scope.data = {
         post_id: $scope.postId
      };

      $scope.loadComments = function(){
         Posts.getComments($scope.postId).then(
            function(res) {
               $scope.comments = res.data;
            },
            function(error) {
               console.log('error', error);
            }
         ).finally(
            function(){
            $scope.$broadcast('scroll.refreshComplete');
          }
         );
      };

      $scope.loadComments();

      $scope.doComment = function() {
         Comments.create($scope.data).then(
            function(res) {

               $scope.data = {
                  post_id: $scope.postId
               };
            },
            function(error){

            }
         );
      };

   }
);