import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from './authentication/authentication.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller()
export class AppController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authenticationService.login(req.user._doc);
  }
}
