import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  create(user: User) {
    console.log('user', user)
    this.userRepository.save(user)
  }

  async findOne(id: number): Promise<any> {
    return await this.userRepository.findOne({ id });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }  

}
