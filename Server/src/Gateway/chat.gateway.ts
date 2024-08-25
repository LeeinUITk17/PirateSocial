import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', 
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  handleMessage(@MessageBody() message: { content: string, roomId: string }, @ConnectedSocket() client: Socket) {
    console.log(`Received message from client ${client.id}:`, message);
    
    this.server.to(message.roomId).emit('receiveMessage', {
      content: message.content,
      userId: client.id, 
    });
    
    console.log(`Message sent to room ${message.roomId}:`, {
      content: message.content,
      userId: client.id,
    });
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
    console.log(`Client ${client.id} joining room ${roomId}`);
    
    client.join(roomId);
    client.emit('joinedRoom', roomId);
    
    console.log(`Client ${client.id} joined room ${roomId}`);
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
    console.log(`Client ${client.id} leaving room ${roomId}`);
    
    client.leave(roomId);
    client.emit('leftRoom', roomId);
    
    console.log(`Client ${client.id} left room ${roomId}`);
  }
}
