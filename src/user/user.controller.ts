import { Controller, Get, Post, Put, Delete ,Param, Body, HttpCode, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PostUserDto } from './dto/post-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAll() { // usando @Res para definir status code como response
    return this.userService.getAll()
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id') // passando parametro
  getOne(@Param(/*Algo especifico pode ser passado aq, Ex: 'name' */) params) {
    return this.userService.getOne(params)
  }

  @Post()
  @HttpCode(/* status code aq */204) //usar o http status ajuda mto
  postUser(@Body(/*Algo especifico pode ser passado aq, Ex: 'name' */) PostUserDto: PostUserDto) {
    return this.userService.postUser(PostUserDto)
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return this.userService.update(id, UpdateUserDto)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id)
  }
}
