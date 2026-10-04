import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Schedules } from './entities/schedules.entites'
import { PostSchedulesDto } from './dto/post-schedules.dto';
import { UpdateSchedulesDto } from './dto/update-schedules.dto';

@Injectable()
export class SchedulesService {

  constructor(@InjectRepository(Schedules) private readonly schedulesRepository: Repository<Schedules>) {}

  getAll() {
    return this.schedulesRepository.find({
      relations: ['shop', 'user']
    })
  }

  getOne(id: string) {
    const schedule = this.schedulesRepository.findOne(id, {
      relations: ['shop', 'user']
    });

    if(!schedule) {
      throw new HttpException(
        `Schedule id ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return schedule
  }

  postSchedule(PostSchedulesDto: PostSchedulesDto) {
    const schedule = this.schedulesRepository.create(PostSchedulesDto)
    return this.schedulesRepository.save(schedule)
  }

  async update(id: string, UpdateSchedulesDto: UpdateSchedulesDto) {
    const schedule = await this.schedulesRepository.preload({
      id: +id,
      ...UpdateSchedulesDto
    })

    if(!schedule) {
      throw new HttpException(
        `Schedule id ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.schedulesRepository.save(schedule)
  }

  async remove(id: string) {
    const schedule = await this.schedulesRepository.findOne(id);

    if(!schedule) {
      throw new HttpException(
        `Schedule id ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.schedulesRepository.remove(schedule)
  }

}
