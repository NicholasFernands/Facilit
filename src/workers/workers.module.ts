import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workers } from './entities/workers.entities';
import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Workers])] ,
  controllers: [WorkersController],
  providers: [WorkersService]
})
export class WorkersModule {}
