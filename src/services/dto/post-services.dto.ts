import { IsString, IsMilitaryTime, IsNumber, IsNotEmpty} from 'class-validator'
import { Shop } from '../../shop/entities/shop.entities'

export class PostServicesDto {

  @IsString()
  @IsNotEmpty()
  name: string


  @IsNumber()
  @IsNotEmpty()
  price: number


  @IsString()
  @IsNotEmpty()
  description: string


  @IsString()
  @IsNotEmpty()
  category: string


  @IsMilitaryTime()
  @IsNotEmpty()
  time: string

  @IsNotEmpty()
  shop: Shop
}
