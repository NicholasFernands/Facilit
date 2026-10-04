import { PartialType } from '@nestjs/mapped-types'
import { PostServicesDto } from './post-services.dto'

export class UpdateServicesDto extends PartialType(PostServicesDto) {}
