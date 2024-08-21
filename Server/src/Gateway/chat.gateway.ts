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
    this.server.to(message.roomId).emit('receiveMessage', {
      content: message.content,
      userId: client.id, 
    });
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
    client.join(roomId);
    client.emit('joinedRoom', roomId); 
  }

  @SubscribeMessage('leaveRoom')
  handleLeaveRoom(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
    client.leave(roomId);
    client.emit('leftRoom', roomId); 
  }
}
