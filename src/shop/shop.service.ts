import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { FindConditions, FindOneOptions, Repository } from 'typeorm'
import { Shop } from './entities/shop.entities'
import { PostShopDto } from "./dto/post-shop.dto"
import { UpdateShopDto } from "./dto/update-shop.dto"

@Injectable()
export class ShopService {

  constructor(@InjectRepository(Shop) private readonly shopRepository: Repository<Shop>) {}

  getAll() {
    return this.shopRepository.find()
  }

  async getOne(conditions: FindConditions<Shop>, options?: FindOneOptions<Shop>) {

    try {
      return await this.shopRepository.findOneOrFail(conditions, options)
    } catch (error) {
      throw new HttpException(
        `${error}`,
        HttpStatus.NOT_FOUND
      )
    }

  }

  postShop(PostShopDto: PostShopDto) {
    const shop = this.shopRepository.create(PostShopDto)
    return this.shopRepository.save(shop)
  }

  async update(id: string, UpdateShopDto: UpdateShopDto) {
    const shop = await this.shopRepository.preload({
      id: +id,
      ...UpdateShopDto
    })

    if(!shop) {
      throw new HttpException(
        `Shop ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.shopRepository.save(shop)
  }

  async remove(id: string) {
    const shop = await this.shopRepository.findOne(id)

    if(!shop) {
      throw new HttpException(
        `Shop ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.shopRepository.remove(shop)
  }
}
