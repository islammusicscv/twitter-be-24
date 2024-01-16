import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { RegisterUserDto } from './register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('register')
  registerUser(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return this.userService.registerUser(registerUserDto);
  }
}
