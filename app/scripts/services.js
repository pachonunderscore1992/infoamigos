angular.module('infoamigos')

.factory('Users', function($rootScope, $window, $http){
  return {
      create: function(data) {
        console.log(data);
        return $http.put($rootScope.getBackendUrl() + 'user/', data, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      update: function(id, data) {
        return $http.post($rootScope.getBackendUrl() + 'user/' + id, data, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      delete: function(id) {
        return $http.delete($rootScope.getBackendUrl() + 'user/' + id);
      },
      getAll: function(page, size) {
        return $http.get($rootScope.getBackendUrl() + 'user/' + '?page=' + (page || 0) + '&size=' + (size || 10), {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      get: function(id) {
        return $http.get($rootScope.getBackendUrl() + 'user/' + id, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      }
    };
})
.factory('Posts', function($rootScope, $window, $http){
  return {
      getAll: function() {
         return $http.get($rootScope.getBackendUrl() + 'post/', {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
         });
      },
      getComments: function(id) {
         return $http.get($rootScope.getBackendUrl() + 'post/' + id + '/comments', {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
         });
      },
      create: function(data) {
         data.title = $window.sessionStorage.principal;
         return $http.put($rootScope.getBackendUrl() + 'post/', data, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
         });
      },
      update: function(id, data) {
        return $http.post($rootScope.getBackendUrl() + 'post/' + id, data, {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      }
   };
})
.factory('Places', function($rootScope, $window, $http){
  return {
    get: function(id) {
      return $http.get($rootScope.getBackendUrl() + 'place/' + id, {
        //TODO: refactor this
        headers: {
          credentials: $window.sessionStorage.credentials,
          principal: $window.sessionStorage.principal
        }
       });
    },
    getAll: function() {
       return $http.get($rootScope.getBackendUrl() + 'place/', {
        //TODO: refactor this
        headers: {
          credentials: $window.sessionStorage.credentials,
          principal: $window.sessionStorage.principal
        }
       });
    },
    create: function(data) {
       return $http.put($rootScope.getBackendUrl() + 'place/', data, {
        //TODO: refactor this
        headers: {
          credentials: $window.sessionStorage.credentials,
          principal: $window.sessionStorage.principal
        }
       });
    }
  };
})
.factory('Topics', function($rootScope, $http, $window){
  return {
     getAll: function() {
         return $http.get($rootScope.getBackendUrl() + 'topic/', {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
         });
      },
      getPosts: function(id) {
          return $http.get($rootScope.getBackendUrl() + 'topic/' + id + '/posts', {
          //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      },
      create: function(data) {
         data.title = $window.sessionStorage.principal;
         return $http.put($rootScope.getBackendUrl() + 'topic/', data, {
        //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
         });
      },
      update: function(data) {
        return $http.post($rootScope.getBackendUrl() + 'topic/' + data.id, data, {
        //TODO: refactor this
          headers: {
            credentials: $window.sessionStorage.credentials,
            principal: $window.sessionStorage.principal
          }
        });
      }
  };
})
.factory('Events', function($rootScope, $window, $http){
  return {
    getAll: function() {
       return $http.get($rootScope.getBackendUrl() + 'event/', {
        //TODO: refactor this
        headers: {
          credentials: $window.sessionStorage.credentials,
          principal: $window.sessionStorage.principal
        }
       });
    },
    create: function(data) {
      return $http.put($rootScope.getBackendUrl() + 'event/', data, {
        //TODO: refactor this
        headers: {
          credentials: $window.sessionStorage.credentials,
          principal: $window.sessionStorage.principal
        }
      });
    }
  };
})
.factory('Comments', function($rootScope, $window, $http){
  return {
    create: function(data) {
      return $http.put($rootScope.getBackendUrl() + 'comment/', data, {
        //TODO: refactor this
        headers: {
          credentials: $window.sessionStorage.credentials,
          principal: $window.sessionStorage.principal
        }
      }); 
    }
  };
})
;