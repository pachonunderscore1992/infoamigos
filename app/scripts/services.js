angular.module('infoamigos')

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  'use strict';
  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Users', function(){
  var users = [{
    id : 1,
    firstName : 'Jose',
    lastName : 'Laura',
    userName : 'pachon',
    password : 'none',
    email: 'pachon@infoamigos.com'
  },{
    id : 2,
    firstName : 'Javier',
    lastName : 'Aruquipa',
    userName : 'pato',
    password : 'none',
    email: 'pato@infoamigos.com'
  }, {
    id: 3,
    firstName : 'Diego',
    lastName : 'Ticona',
    userName : 'ben',
    password : '123',
    email: 'ben@infoamigos.com'
  }

  ];
  return {
    all: function() {
      return users;
    },
    login: function(userName, password) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].userName === userName && users[i].password === password) {
          return users[i];
        }
      }
      return null;
    },
    signUp: function(user) {
      users.push(user);
    }
  };
})
.factory('Posts', function(){
  var posts = [
    {
      topic: 'INF 281',
      name: 'Pato',
      date: 'Hoy, 11:31',
      content: 'No se olviden hacer la tarea :D',
      likes: 5,
      comments: 1
    },
    {
      topic: 'INF 281',
      name: 'Ben',
      date: 'Hoy, 12:00',
      content: 'Hoy es la presentacion de Scrum',
      likes: 1,
      comments: 0
    },
    {
      topic: 'INF 143',
      name: 'Yama',
      date: 'Ayer, 17:31',
      content: 'Pero es facil xD',
      likes: 10,
      comments: 0
    }
    ];
  return {
    all: function(sigla) {

      if(sigla == 'general'){
         return posts;
      }
      var r = [];
      for (var i = posts.length - 1; i >= 0; i--) {
        if(posts[i].topic.endsWith(sigla)) {
          r.push(posts[i]);
        }
      };
      return r;
    }
  };
})
.factory('Places', function(){
  var places = [
    {
      name: 'A',
      floor: 0
    },
    {
      name: 'E',
      floor: 1
    }
  ];
  return {
     all: function() {
      return places;
     },
     create: function(place) {
        places.push(place);
     }
  };
})
.factory('Topics', function(){
  var topics = [
    {
      code: '281',
      name: 'Taller de Sistemas'
    },
    {
      code: '143',
      name: 'Taller de Programacion'
    }
  ];
  return {
     getByCode: function(code) {
       for (var i = topics.length - 1; i >= 0; i--) {
         if(topics[i].code == code) {
          return topics[i];
         }
       }
       return null;
     },
     all: function() {
      return topics;
     },
     create: function(topic) {
        topics.push(topic);
     }
  };
})
.factory('Events', function(){
  var events  = [
    {
      name: 'Entrega de Video 281',
      description: 'Entregar el video sobre Scrum',
      date: '5 mayo 2015',
      place: 'Laboratorio Basico'
    },
    {
      name: 'Feriado por el Dia del Trabajador',
      description: 'Feriado',
      date: '1 mayo 2015',
      place: 'Carrera de Informatica'
    }
  ]
  return {
    all: function() {
      return events;
    },
    create: function(event) {
      events.push(event);
    }
  };
})