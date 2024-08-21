import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomUserService } from './room-user.service';
import { CreateRoomUserDto } from './dto/create-room-user.dto';
import { UpdateRoomUserDto } from './dto/update-room-user.dto';

@Controller('room-user')
export class RoomUserController {
  constructor(private readonly roomUserService: RoomUserService) {}

  @Post()
  create(@Body() createRoomUserDto: CreateRoomUserDto) {
    return this.roomUserService.create(createRoomUserDto);
  }

  @Get()
  findAll() {
    return this.roomUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomUserDto: UpdateRoomUserDto) {
    return this.roomUserService.update(+id, updateRoomUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomUserService.remove(+id);
  }
}
