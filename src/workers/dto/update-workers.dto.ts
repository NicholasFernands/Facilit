import { PartialType } from '@nestjs/mapped-types'
import { PostWorkersDto } from './post-workers.dto'

export class UpdateWokersDto extends PartialType(PostWorkersDto) {}
