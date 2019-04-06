import { Controller, Get , Param, Post, Body} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.userService.findOne(id);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
  
  @Post()
  create(@Body() data: any) {
    let { id } = data
    return this.userService.create(id);
  }
    
}
