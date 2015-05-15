angular.module('infoamigos')

.controller('ChatsCtrl',
   function($scope, Chats) {
      console.log(Chats.all());
      $scope.chats = Chats.all();
      $scope.remove = function(chat) {
         Chats.remove(chat);
      };
   }
);