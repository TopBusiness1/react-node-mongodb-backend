import {
  Controller,
  Logger,
  Post,
  Body,
  UnauthorizedException,
  Patch,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('users')
@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    const newUser = await this.usersService.createUser(createUserDTO);
    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };
  }

  // edit a user
  @UseGuards(AuthGuard('jwt'))
  @Patch()
  async updateRecord(@Request() req): Promise<User> {
    return req;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
