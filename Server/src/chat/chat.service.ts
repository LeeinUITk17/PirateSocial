import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}
  async sendMessage(roomId: number, senderId: number, message: string) {
    return this.prisma.chat.create({
      data: {
        roomId,
        senderId,
        message,
      },
    });
  }

  async getMessagesByRoom(roomId: number) {
    return this.prisma.chat.findMany({
      where: { roomId },
      orderBy: { createdAt: 'asc' },
    });
  }
}
