import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatGateway } from 'src/Gateway/chat.gateway';

@Module({
  controllers: [RoomController],
  providers: [RoomService,PrismaService,ChatGateway],
})
export class RoomModule {}
