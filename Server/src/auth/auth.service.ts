import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: PrismaService) {}

  async googleLogin(token: string) {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`
    );
    console.log(response.data);
    const { email, hd, name } = response.data as {
      email: string;
      hd: string;
      name: string;
    };

    if (hd !== 'gm.uit.edu.vn') {
      console.log('Unauthorized');
      throw new Error('Unauthorized');
    }
    console.log('Authorized');

    const userData : CreateAuthDto = {
      email,
      name: name || 'None', 
      password: hd, 
    };

    let user = await this.databaseService.user.findUnique({
      where: { email },
    });
    if (!user) {
      user = await this.databaseService.user.create({
        data: userData,
      });
    } else {
      user = await this.databaseService.user.update({
        where: { email },
        data: userData,
      });
    }

    return user;
  }
}
