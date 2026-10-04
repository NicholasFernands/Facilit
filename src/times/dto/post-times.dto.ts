import { IsMilitaryTime, IsNotEmpty } from "class-validator";
import { Shop } from '../../shop/entities/shop.entities'
import { Workers } from '../../workers/entities/workers.entities'


export class PostTimesDto {

  @IsMilitaryTime()
  @IsNotEmpty()
  date: string

  @IsNotEmpty()
  shop: Shop

  @IsNotEmpty()
  workers: Workers

}
