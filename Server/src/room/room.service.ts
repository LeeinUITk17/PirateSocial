import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}
  async createRoom(name: string) {
    return this.prisma.room.create({
      data: { name },
    });
  }

  async addUserToRoom(roomId: number, userId: number) {
    return this.prisma.roomUser.create({
      data: {
        roomId,
        userId,
      },
    });
  }
}
