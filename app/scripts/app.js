angular.module('infoamigos',[
   'ionic',
   'infoamigos.services'
])
.config(
   function($stateProvider, $urlRouterProvider) {
      'use strict';
      $stateProvider
         .state('signin', {
            url: '/sign-in',
            templateUrl: 'templates/sign-in.html',
            controller: 'SignInCtrl'
         })
         .state('forgotpassword', {
            url: '/forgot-password',
            templateUrl: 'templates/forgot-password.html'
         })
         .state('tabs', {
            url: '/tabs',
            abstract: true,
            templateUrl: 'templates/tabs.html'
         })
         .state('tabs.home', {
            url: '/home',
            views: {
               'home-tab': {
                  templateUrl: 'templates/home.html',
                  controller: 'HomeTabCtrl'
               }
            }
         })
         .state('tabs.facts', {
            url: '/facts',
            views: {
               'home-tab': {
                  templateUrl: 'templates/facts.html'
               }
            }
         })
         .state('tabs.facts2', {
            url: '/facts2',
            views: {
               'home-tab': {
                  templateUrl: 'templates/facts2.html'
               }
            }
         })
         .state('tabs.about', {
            url: '/about',
            views: {
               'about-tab': {
                  templateUrl: 'templates/about.html'
               }
            }
         })
         .state('tabs.navstack', {
            url: '/navstack',
            views: {
               'about-tab': {
                  templateUrl: 'templates/nav-stack.html'
               }
            }
         })
         .state('tabs.dash', {
            url: '/dash',
            views: {
               'tab-dash': {
                  templateUrl: 'templates/tab-dash.html',
                  controller: 'DashCtrl'
               }
            }
         })
         .state('tabs.chats', {
            url: '/chats',
            views: {
               'tab-chats': {
                  templateUrl: 'templates/tab-chats.html',
                  controller: 'ChatsCtrl'
               }
            }
         })
         .state('tabs.chat-detail', {
            url: '/chats/:chatId',
            views: {
               'tab-chats': {
                  templateUrl: 'templates/chat-detail.html',
                  controller: 'ChatDetailCtrl'
               }
            }
         })
         .state('tabs.account', {
            url: '/account',
            views: {
               'tab-account': {
                  templateUrl: 'templates/tab-account.html',
                  controller: 'AccountCtrl'
               }
            }
         });
      $urlRouterProvider.otherwise('/sign-in');
   }
);