import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm'
import { User } from './entities/user.entities'
import { PostUserDto } from './dto/post-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}


  getAll() {
    return this.userRepository.find({
      select: ['id', 'cpf', 'name', 'phone', 'gender', 'email']
    })
  }

  async getOne(conditions: FindConditions<User>, options?: FindOneOptions<User>) {

    try {
      return await this.userRepository.findOneOrFail(conditions, options)
    } catch (error) {
      throw new HttpException(
        `${error}`,
        HttpStatus.NOT_FOUND
      )
    }

  }

  async postUser(PostUserDto: PostUserDto) {
    const user = this.userRepository.create(PostUserDto)
    return this.userRepository.save(user)
  }

  async update(id: string, UpdateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id: +id,
      ...UpdateUserDto
    })

    if(!user) {
      throw new HttpException(
        `User ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.userRepository.save(user)
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne(id)

    if(!user) {
      throw new HttpException(
        `User ID ${id} not found`,
        HttpStatus.NOT_FOUND
      )
    }

    return this.userRepository.remove(user)
  }
}
