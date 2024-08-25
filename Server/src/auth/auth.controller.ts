import { Controller, Get, Query, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  async googleAuth(@Query('token') token: string, @Res() res) {
    try {
      const user = await this.authService.googleLogin(token);
      res.status(HttpStatus.OK).json(user);
    } catch (error) {
      res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }
  }
}
