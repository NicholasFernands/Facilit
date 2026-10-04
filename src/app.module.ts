import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WorkersModule } from './workers/workers.module';
import { TimesModule } from './times/times.module';
import { ShopModule } from './shop/shop.module';
import { ServicesModule } from './services/services.module';
import { SchedulesModule } from './schedules/schedules.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [UserModule, WorkersModule, TimesModule, ShopModule, ServicesModule, SchedulesModule, AuthModule, ConfigModule.forRoot(), TypeOrmModule.forRoot({
    "type": "mysql",
    "host": process.env.DB_HOST || "localhost",
    "port": parseInt(process.env.DB_PORT) || 3306,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "autoLoadEntities": true,
    "synchronize": true,
    "logging": false,
    "entities": ["dist/**/*entity.js"],
    "migrations": ["dist/migration/*.js"],
    cli: {
      migrationsDir: 'src/migrations/*.ts'
    },
    "subscribers": ["src/subscriber/**/*.ts"]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
