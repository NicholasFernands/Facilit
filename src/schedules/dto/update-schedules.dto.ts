import { PartialType } from '@nestjs/mapped-types'
import { PostSchedulesDto } from './post-schedules.dto'

export class UpdateSchedulesDto extends PartialType(PostSchedulesDto) {}
