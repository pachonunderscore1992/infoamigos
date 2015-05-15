angular.module('infoamigos.services', [])

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
      if(sigla == 'general') return posts;
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
.factory('Aulas', function(){
  var aulas = [
    {
      name: 'A',
      piso: 0
    },
    {
      name: 'E',
      piso: 1
    }
  ];
  return {
     all: function() {
      return aulas;
     },
     create: function(aula) {
        aulas.push(aula);
     }
  };
})
.factory('Materias', function(){
  var materias = [
    {
      sigla: '281',
      nombre: 'Taller de Sistemas'
    },
    {
      sigla: '143',
      nombre: 'Taller de Programacion'
    }
  ];
  return {
     all: function() {
      return materias;
     },
     create: function(materia) {
        materias.push(materia);
     }
  };
})
.factory('Eventos', function(){
  var eventos  = [
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
      return eventos;
    },
    create: function(evento) {
      eventos.push(evento);
    }
  };
})