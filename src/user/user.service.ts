import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from '../auth/register-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    const hash = await bcrypt.hash(registerUserDto.pass, 10);
    const data = { ...registerUserDto, pass: hash };
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }
}
