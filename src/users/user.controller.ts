import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './usersDto/users-Dto';



@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()

  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.users({});
  }

  @Get(':id')

  async findOne(@Param('id') id: string) {
    return this.userService.user({ id: Number(id) });
  }

  @Patch(':id')

  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: updateUserDto,
    });
  }

  @Delete(':id')

  async remove(@Param('id') id: string) {
    return this.userService.deleteUser({ id: Number(id) });
  }
}