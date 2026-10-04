import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Services } from './entities/services.entities'
import { PostServicesDto } from './dto/post-services.dto';
import { UpdateServicesDto } from './dto/update-services.dto';


@Injectable()
export class ServicesService {

  constructor(@InjectRepository(Services) private readonly servicesRepository: Repository<Services>) {}

  getAll() {
    return this.servicesRepository.find({
      relations: ['shop']
    })
  }

  getOne(id: string) {
    const services = this.servicesRepository.findOne(id, {
      relations: ['shop']
    });

    if(!services) {
      throw new HttpException(
        `Service id ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return services
  }

  postSchedule(PostServicesDto: PostServicesDto) {
    const service = this.servicesRepository.create(PostServicesDto)
    return this.servicesRepository.save(service)
  }

  async update(id: string, UpdateServicesDto: UpdateServicesDto) {
    const services = await this.servicesRepository.preload({
      id: +id,
      ...UpdateServicesDto
    })

    if(!services) {
      throw new HttpException(
        `Service id ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.servicesRepository.save(services)
  }

  async remove(id: string) {
    const services = await this.servicesRepository.findOne(id);

    if(!services) {
      throw new HttpException(
        `Schedule id ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.servicesRepository.remove(services)
  }
}
