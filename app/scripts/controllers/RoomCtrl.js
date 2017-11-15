(function() {
  function RoomCtrl(Room, Message, $uibModal, $cookies) {
    var room = this;
    room.currentRoom = null;
    room.rooms = Room.all;
    room.currentUser = $cookies.get('blocChatCurrentUser');
    room.newMessage = {};
    room.newRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
    };

    room.showRoom = function(rm) {
      room.currentRoom = rm;
      room.messages = Message.getByRoomId(room.currentRoom.$id);
    };

    room.sendMessage = function(newMessage) {
      room.newMessage.roomId = room.currentRoom.$id;
      room.newMessage.currentUser = room.currentUser;
      Message.send(room.newMessage);
    };

  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', RoomCtrl]);
})();
