import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedules } from './entities/schedules.entites';
import { SchedulesController } from './schedules.controller';
import { SchedulesService } from './schedules.service';

@Module({
  imports: [TypeOrmModule.forFeature([Schedules])],
  controllers: [SchedulesController],
  providers: [SchedulesService]
})
export class SchedulesModule {}
