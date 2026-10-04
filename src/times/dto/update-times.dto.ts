import { PartialType } from '@nestjs/mapped-types'
import { PostTimesDto } from './post-times.dto'

export class UpdateTimesDto extends PartialType(PostTimesDto) {}
