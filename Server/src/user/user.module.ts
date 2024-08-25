import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatGateway } from 'src/Gateway/chat.gateway';

@Module({
  controllers: [UserController],
  providers: [UserService,PrismaService,ChatGateway],
})
export class UserModule {}
