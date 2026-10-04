import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Times } from './entities/times.entities'
import { PostTimesDto } from "./dto/post-times.dto"
import { UpdateTimesDto } from "./dto/update-times.dto"

@Injectable()
export class TimesService {

  constructor(@InjectRepository(Times) private readonly timesRepository: Repository<Times>) {}

  getAll() {
    return this.timesRepository.find({
      relations: ['shop', 'workers']
    })
  }

  getOne(id: string) {
    const times = this.timesRepository.findOne(id, {
      relations: ['shop', 'workers']
    })

    if(!times) {
      throw new HttpException (
        `Times ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return times
  }

  postShop(PostTimesDto: PostTimesDto) {
    const times = this.timesRepository.create(PostTimesDto)
    return this.timesRepository.save(times)
  }

  async update(id: string, UpdateTimesDto: UpdateTimesDto) {
    const times = await this.timesRepository.preload({
      id: +id,
      ...UpdateTimesDto
    })

    if(!times) {
      throw new HttpException(
        `Times ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.timesRepository.save(times)
  }

  async remove(id: string) {
    const times = await this.timesRepository.findOne(id)

    if(!times) {
      throw new HttpException(
        `User ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.timesRepository.remove(times)
  }

}
