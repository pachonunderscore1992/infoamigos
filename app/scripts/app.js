angular.module('infoamigos', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'templates/forgot.html'
    })
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/app.html"
    })
    .state('app.home', {
      url: "/home",
      views: {
        'appContent': {
          templateUrl: "templates/home.html",
          controller : "HomeCtrl"
        }
      }
    })
    .state('app.topics', {
      url: '/topics',
      views: {
        'appContent': {
          templateUrl: 'templates/topics.html',
          controller: 'TopicsCtrl'
        }
      }
    })
    .state('app.profile', {
      url: '/profile',
      views: {
        'appContent': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })
    .state('app.places', {
      url: '/places',
      views: {
        'appContent': {
          templateUrl: 'templates/places.html',
          controller: 'PlacesCtrl'
        }
      }
    })
    .state('app.create-place', {
      url: '/places/create',
      views: {
        'appContent': {
          templateUrl: 'templates/create-place.html',
          controller: 'CreatePlaceCtrl'
        }
      }
    })
    .state('app.events', {
      url: '/events',
      views: {
        'appContent': {
          templateUrl: 'templates/events.html',
          controller: 'EventsCtrl'
        }
      }
    })
    .state('app.create-event', {
      url: '/events/create',
      views: {
        'appContent': {
          templateUrl: 'templates/create-event.html',
          controller: 'CreateEventCtrl'
        }
      }
    })
    .state('app.create-topic', {
      url: "/topics/create",
      views: {
        'appContent': {
          templateUrl: 'templates/create-topic.html',
          controller: 'CreateTopicCtrl'
        }
      }
    })
    .state('app.topic-detail', {
      url: "/topics/:topicId",
      views: {
        'appContent': {
          templateUrl: 'templates/topic-detail.html',
          controller: 'TopicDetailCtrl'
        }
      }
    })
    ;

  $urlRouterProvider.otherwise("/login");
})
