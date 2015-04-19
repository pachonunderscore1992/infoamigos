angular.module('infoamigos')

.controller('ChatDetailCtrl',
   function($scope, $stateParams, Chats) {

      console.log($stateParams.chatId);
      $scope.chat = Chats.get($stateParams.chatId);
   }
);