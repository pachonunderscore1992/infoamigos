angular.module('infoamigos')

.controller('HomeTabCtrl',
   function($scope, Chats) {
      console.log(Chats.all());
      console.log('HomeTabCtrl');
   }
);