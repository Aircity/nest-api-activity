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


  create(id: string) {
    let user = new User();
    user.id = id
    this.userRepository.save(user)
  }

  async findOne(id: string): Promise<any> {
    return await this.userRepository.findOne({ id });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }  

   async update(id: string, user: User): Promise<User> {
    let userToUpdate =  await this.userRepository.findOne({ id });
    Object.assign(userToUpdate,user);
     return await this.userRepository.save(userToUpdate);
   }
  }