import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatGateway } from 'src/Gateway/chat.gateway';

@Module({
  controllers: [ChatController],
  providers: [ChatService,PrismaService,ChatGateway],
})
export class ChatModule {}
