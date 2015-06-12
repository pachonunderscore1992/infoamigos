angular.module('infoamigos')

.controller('TopicsCtrl',
   function($scope, Topics) {
      $scope.loadTopics = function(){
        Topics.getAll().then(
            function(res) {
               $scope.topics = res.data;
            },
            function(error){
               console.log('error', error);
            }
         ).finally(
            function(){
            $scope.$broadcast('scroll.refreshComplete');
          }
         );
      };
      $scope.loadTopics();
   }
);