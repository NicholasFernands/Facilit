import { Controller, Delete, Get, HttpCode, Param, Patch, Post, Body, UseGuards } from '@nestjs/common';
import { SchedulesService } from './schedules.service'
import { PostSchedulesDto } from './dto/post-schedules.dto'
import { UpdateSchedulesDto } from './dto/update-schedules.dto'
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('schedules')
export class SchedulesController {

  constructor(private readonly scheduleService: SchedulesService) {}

  @Get()
  getAll() {
    return this.scheduleService.getAll();
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.scheduleService.getOne(params);
  }

  @Post()
  @HttpCode(204)
  postSchedule(@Body() PostSchedulesDto: PostSchedulesDto) {
    return this.scheduleService.postSchedule(PostSchedulesDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateSchedulesDto: UpdateSchedulesDto) {
    return this.scheduleService.update(id, UpdateSchedulesDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(id)
  }
}
