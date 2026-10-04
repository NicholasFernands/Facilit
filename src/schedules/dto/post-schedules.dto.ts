import { IsString, IsNotEmpty, IsDateString, IsMilitaryTime, IsNumber }  from 'class-validator'
import { Shop } from '../../shop/entities/shop.entities'
import { User } from '../../user/entities/user.entities'

export class PostSchedulesDto {

  @IsString()
  @IsNotEmpty()
  name: string

  @IsDateString()
  @IsNotEmpty()
  date: string

  @IsMilitaryTime()
  @IsNotEmpty()
  time: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsString()
  @IsNotEmpty()
  status: string

  @IsString()
  @IsNotEmpty()
  shopName: string

  @IsMilitaryTime()
  @IsNotEmpty()
  duration: string

  @IsNotEmpty()
  shop: Shop

  @IsNotEmpty()
  user: User

}
