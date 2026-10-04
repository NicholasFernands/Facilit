import { PartialType } from '@nestjs/mapped-types'
import { PostShopDto } from './post-shop.dto'

export class UpdateShopDto extends PartialType(PostShopDto) {}
