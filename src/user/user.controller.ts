import { Controller, Get , Param} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(@Param('id') id: number): any {
    return this.userService.findOne(id);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  
    
}
