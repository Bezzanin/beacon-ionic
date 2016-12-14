var PROXIMIIO_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6ImQyNzRjMmJkNDk5ZTQ1NzhiNzRkMmQxMzA1OTI2ZDk3IiwidHlwZSI6ImFwcGxpY2F0aW9uIiwiYXBwbGljYXRpb25faWQiOiI4MGM0NTcwZi1hNjYzLTQ5NzctOTI4Mi1iZGMwYmY2Mjk4MjcifQ.PIsPdbJQlvqMM1-GQ7xb0LUuMoFmbJ5QuEIQHNRMS9c";

angular.module('starter.services', [])

.factory("Proximiio", function() {
    return {
      init: function(outputTriggerCallback, inputTriggerCallback, positionChangeCallback) {
        proximiio.setToken(PROXIMIIO_TOKEN);
        proximiio.setDebugOutput(true, null, null);
        proximiio.setOutputTriggerCallback(outputTriggerCallback);
        proximiio.setInputTriggerCallback(inputTriggerCallback);
        proximiio.setPositionChangeCallback(positionChangeCallback);
      }
    };
})
.factory('GetUser', function() {
  var user = {
    name: 'Shokhrukh Yakubov',
    status: 'online',
    department: 'IT support',
    todoItems: [
      {text: 'Check email', due: '20:00', isImportant: false},
      {text: 'Visit CEO', due: '12.12.16', isImportant: true},
      {text: 'Remove tests from the librrary', due: '12:30', isImportant: false},
      {text: 'Test the environment for various mistakes related to  the content amount', due: '12:30', isImportant: false}
    ]
  }
  return user;

})

.factory('CheckDatabase', function() {
  var user = {}
  firebase.database().ref('/todolist').on('value', function(snapshot) {
    user.todolist = snapshot.val();
  });
  return user;
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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
});
