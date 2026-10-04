import { Controller, Get, Post, Patch, Delete, Param, Body, HttpCode, UseGuards } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { PostWorkersDto } from './dto/post-workers.dto';
import { UpdateWokersDto } from './dto/update-workers.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('workers')
@UseGuards(AuthGuard('jwt'))
export class WorkersController {

  constructor(private readonly workersService: WorkersService) {}

  @Get()
  GetAll() {
    return this.workersService.getAll();
  }

  @Get(':id')
  GetOne(@Param() params) {
    return this.workersService.getOne(params)
  }

  @Post()
  @HttpCode(204)
  postShop(@Body() PostWorkersDto: PostWorkersDto) {
    return this.workersService.postShop(PostWorkersDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateWokersDto: UpdateWokersDto) {
    return this.workersService.update(id, UpdateWokersDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workersService.remove(id)
  }

}
