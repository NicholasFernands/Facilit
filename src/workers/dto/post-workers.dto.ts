import { IsString, IsNotEmpty, IsMilitaryTime } from 'class-validator'
import { Shop } from '../../shop/entities/shop.entities'

export class PostWorkersDto {

  @IsString()
  @IsNotEmpty()
  name: string

  @IsMilitaryTime()
  @IsNotEmpty()
  openingTimeOne: string

  @IsMilitaryTime()
  @IsNotEmpty()
  closingTimeOne: string

  @IsMilitaryTime()
  @IsNotEmpty()
  breakTime: string

  @IsNotEmpty()
  shop: Shop
}
