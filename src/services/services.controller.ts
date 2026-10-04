import { Controller, Delete, Get, HttpCode, Param, Patch, Post, Body, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service'
import { PostServicesDto } from './dto/post-services.dto'
import { UpdateServicesDto } from './dto/update-services.dto'
import { AuthGuard } from '@nestjs/passport';

@Controller('services')
@UseGuards(AuthGuard('jwt'))
export class ServicesController {

  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  getAll() {
    return this.servicesService.getAll();
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.servicesService.getOne(params);
  }

  @Post()
  @HttpCode(204)
  postSchedule(@Body() PostServicesDto: PostServicesDto) {
    return this.servicesService.postSchedule(PostServicesDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateServicesDto: UpdateServicesDto) {
    return this.servicesService.update(id ,UpdateServicesDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(id)
  }
}
