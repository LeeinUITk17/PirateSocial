import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { RoomModule } from './room/room.module';
import { RoomUserModule } from './room-user/room-user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ChatModule, RoomModule, RoomUserModule,PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
