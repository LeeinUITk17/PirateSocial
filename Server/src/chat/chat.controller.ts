import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async sendMessage(
    @Body('roomId') roomId: number,
    @Body('senderId') senderId: number,
    @Body('message') message: string,
  ) {
    return this.chatService.sendMessage(roomId, senderId, message);
  }

  @Get(':roomId')
  async getMessagesByRoom(@Param('roomId') roomId: number) {
    return this.chatService.getMessagesByRoom(roomId);
  }
}
