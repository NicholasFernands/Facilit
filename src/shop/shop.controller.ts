import { Controller, Get, Post, Patch, Delete, Param, Body, HttpCode, UseGuards } from '@nestjs/common';
import { ShopService } from './shop.service';
import { PostShopDto } from './dto/post-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('shop')
export class ShopController {

  constructor(private readonly shopService: ShopService) {}


  @Get()
  @UseGuards(AuthGuard('jwt'))
  GetAll() {
    return this.shopService.getAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  GetOne(@Param() params) {
    return this.shopService.getOne(params)
  }

  @Post()
  @HttpCode(204)
  postShop(@Body() PostShopDto: PostShopDto) {
    return this.shopService.postShop(PostShopDto)
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() UpdateShopDto: UpdateShopDto) {
    return this.shopService.update(id, UpdateShopDto)
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.shopService.remove(id)
  }


}
