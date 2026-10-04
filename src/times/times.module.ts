import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Times } from './entities/times.entities';
import { TimesController } from './times.controller';
import { TimesService } from './times.service';

@Module({
  imports: [TypeOrmModule.forFeature([Times]),],
  controllers: [TimesController],
  providers: [TimesService]
})
export class TimesModule {}
