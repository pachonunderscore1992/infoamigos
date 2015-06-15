angular.module('infoamigos', ['ionic'])

.run(function($rootScope, $location, $ionicPlatform) {
  $rootScope.getBackendUrl = function() {
    return 'http://' + 
    // '104.131.26.101'+
    // '192.168.43.89'+
    // '10.42.0.1'+
    'localhost' +
     ':8080/nucleus-backend/';
  };
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if (navigator.splashscreen) {
       navigator.splashscreen.hide();
    } 
  });
})

.config(function($stateProvider, $urlRouterProvider, $compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|geo|tel|local):/);
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
    .state('home', {
      url: "/home",
      views: {
        'appContent': {
          templateUrl: "templates/home.html",
          controller : "HomeCtrl"
        }
      }
    })
    .state('topics', {
      url: '/topics',
      views: {
        'appContent': {
          templateUrl: 'templates/topics.html',
          controller: 'TopicsCtrl'
        }
      }
    })
    .state('profile', {
      url: '/profile',
      views: {
        'appContent': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })
    .state('places', {
      url: '/places',
      views: {
        'appContent': {
          templateUrl: 'templates/places.html',
          controller: 'PlacesCtrl'
        }
      }
    })
    .state('place-detail', {
      url: '/place/:placeId',
      views: {
        'appContent': {
          templateUrl: 'templates/place-detail.html',
          controller: 'PlaceDetailCtrl'
        }
      }
    })
    .state('events', {
      url: '/events',
      views: {
        'appContent': {
          templateUrl: 'templates/events.html',
          controller: 'EventsCtrl'
        }
      }
    })
    .state('create-event', {
      url: '/events/create',
      views: {
        'appContent': {
          templateUrl: 'templates/create-event.html',
          controller: 'CreateEventCtrl'
        }
      }
    })
    .state('create-topic', {
      url: "/topics/create",
      views: {
        'appContent': {
          templateUrl: 'templates/create-topic.html',
          controller: 'CreateTopicCtrl'
        }
      }
    })
    .state('topic-detail', {
      url: '/topics/:topicId',
      views: {
        'appContent': {
          templateUrl: 'templates/topic-detail.html',
          controller: 'TopicDetailCtrl'
        }
      }
    })
    .state('topic-comments', {
      url: '/topics/:topicId/post/:postId',
      views: {
        'appContent': {
          templateUrl: 'templates/topic-comments.html',
          controller: 'TopicCommentsCtrl'
        }
      }
    })
    
    ;

  $urlRouterProvider.otherwise("/login");
})
