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
         })
         .state('tabs.topics', {
            url: '/topics',
            views: {
               'tab-account': {
                  templateUrl: 'templates/topic.html',
                  controller: 'TopicCtrl'
               }
            }
         })
         .state('tabs.topics-create', {
            url: '/topics/create',
            views: {
               'tab-account': {
                  templateUrl: 'templates/new-materia.html',
                  controller: 'NuevaMateriaCtrl'
               }
            }
         })
         .state('tabs.topics-sigla', {
            url: '/topics/:sigla',
            views: {
               'tab-account': {
                  templateUrl: 'templates/topic-sigla.html',
                  controller: 'TopicSiglaCtrl'
               }
            }
         })
         .state('tabs.aulas', {
            url: '/aulas',
            views: {
               'tab-account': {
                  templateUrl: 'templates/aula.html',
                  controller: 'AulaCtrl'
               }
            }
         })
         .state('tabs.nuevaaula', {
            url: '/aulas/create',
            views: {
               'tab-account': {
                  templateUrl: 'templates/new-aula.html',
                  controller: 'NuevaAulaCtrl'
               }
            }
         })
         .state('tabs.eventos', {
            url: '/eventos',
            views: {
               'tab-account': {
                  templateUrl: 'templates/eventos.html',
                  controller: 'EventoCtrl'
               }
            }
         })
         .state('tabs.nuevoevento', {
            url: '/eventos/create',
            views: {
               'tab-account': {
                  templateUrl: 'templates/new-event.html',
                  controller: 'NuevoEventoCtrl'
               }
            }
         })
         .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl'
         })
         ;
      $urlRouterProvider.otherwise('/sign-in');
   }
);