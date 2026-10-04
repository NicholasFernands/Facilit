import { Controller, Get, Post, Patch, Delete, Param, Body, HttpCode, UseGuards } from '@nestjs/common';
import { TimesService } from './times.service';
import { PostTimesDto } from './dto/post-times.dto';
import { UpdateTimesDto } from './dto/update-times.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('times')
export class TimesController {

  constructor(private readonly timesService: TimesService) {}

  @Get()
  GetAll() {
    return this.timesService.getAll();
  }

  @Get(':id')
  GetOne(@Param() params) {
    return this.timesService.getOne(params)
  }

  @Post()
  @HttpCode(204)
  postShop(@Body() PostTimesDto: PostTimesDto) {
    return this.timesService.postShop(PostTimesDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateTimesDto: UpdateTimesDto) {
    return this.timesService.update(id, UpdateTimesDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timesService.remove(id)
  }

}
