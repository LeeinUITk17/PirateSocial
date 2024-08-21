import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { RoomModule } from './room/room.module';
import { RoomUserModule } from './room-user/room-user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChatGateway } from './Gateway/chat.gateway';

@Module({
  imports: [UserModule, ChatModule, RoomModule, RoomUserModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService,PrismaService,ChatGateway],
})
export class AppModule {}
