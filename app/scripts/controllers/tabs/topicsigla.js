angular.module('infoamigos')

.controller('TopicSiglaCtrl',
   function($scope, $stateParams, Posts) {
      $scope.sigla = $stateParams.sigla;
      $scope.loadPosts = function(){
        $scope.posts = Posts.all($scope.sigla);
      };
      $scope.loadPosts();
   }
);