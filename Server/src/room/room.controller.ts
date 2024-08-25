import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async createRoom(@Body('name') name: string) {
    return this.roomService.createRoom(name);
  }

  @Post(':roomId/users/:userId')
  async addUserToRoom(
    @Param('roomId') roomId: number,
    @Param('userId') userId: number,
  ) {
    return this.roomService.addUserToRoom(roomId, userId);
  }
}
