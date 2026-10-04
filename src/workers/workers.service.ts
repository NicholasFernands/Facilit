import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Workers } from './entities/workers.entities'
import { PostWorkersDto } from "./dto/post-workers.dto"
import { UpdateWokersDto } from "./dto/update-workers.dto"

@Injectable()
export class WorkersService {

  constructor(@InjectRepository(Workers) private readonly workerRepository: Repository<Workers>) {}

  getAll() {
    return this.workerRepository.find({
      relations: ['shop']
    })
  }

  getOne(id: string) {
    const worker = this.workerRepository.findOne(id, {
      relations: ['shop']
    })

    if(!worker) {
      throw new HttpException (
        `Workers ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return worker
  }

  postShop(PostWorkersDto: PostWorkersDto) {
    const worker = this.workerRepository.create(PostWorkersDto)
    return this.workerRepository.save(worker)
  }

  async update(id: string, UpdateWorkersDto: UpdateWokersDto) {
    const worker = await this.workerRepository.preload({
      id: +id,
      ...UpdateWorkersDto
    })

    if(!worker) {
      throw new HttpException(
        `Workers ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.workerRepository.save(worker)
  }

  async remove(id: string) {
    const shop = await this.workerRepository.findOne(id)

    if(!shop) {
      throw new HttpException(
        `Workers ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.workerRepository.remove(shop)
  }

}
