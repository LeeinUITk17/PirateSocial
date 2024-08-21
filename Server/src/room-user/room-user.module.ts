import { Module } from '@nestjs/common';
import { RoomUserService } from './room-user.service';
import { RoomUserController } from './room-user.controller';

@Module({
  controllers: [RoomUserController],
  providers: [RoomUserService],
})
export class RoomUserModule {}
