import { Module } from '@nestjs/common';
import { RoomUserService } from './room-user.service';
import { RoomUserController } from './room-user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatGateway } from 'src/Gateway/chat.gateway';

@Module({
  controllers: [RoomUserController],
  providers: [RoomUserService,PrismaService,ChatGateway],
})
export class RoomUserModule {}
