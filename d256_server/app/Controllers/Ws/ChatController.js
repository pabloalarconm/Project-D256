'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(data){
    this.socket.broadcast("message", data); // broadcastToAll() enviara el mensaje a todos. incluido el mismo
    console.log(this.socket.id);
  }
}

module.exports = ChatController


/*
{
    OPEN: 0,
    JOIN: 1,
    LEAVE: 2,
    JOIN_ACK: 3,
    JOIN_ERROR: 4,
    LEAVE_ACK: 5,
    LEAVE_ERROR: 6,
    EVENT: 7,
    PING: 8,
    PONG: 9
}

*/