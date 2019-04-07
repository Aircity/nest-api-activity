import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
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
    return this.userService.findAll();
  }

  @Get('query/:category')
  query(@Param('category') category: string): Promise<any> {
    if (['Africa', 'Asia', 'Oceania', 'Europe', 'America'].includes(category)) {
      return this.userService.query(category);
    }
  }

  @Post()
  create(@Body() data: any) {
    let { id } = data;
    return this.userService.create(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return this.userService.update(id, user);
  }
}
