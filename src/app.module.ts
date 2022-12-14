import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppConfigModule} from "./config/app/config.module";
import {TypeOrmConfigModule} from "./config/typeorm/typeorm.module";
import {DatabaseConfigModule} from "./config/database/config.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./database/entities/user.entity";

@Module({
  imports: [
      TypeOrmConfigModule,
      TypeOrmModule.forFeature([User]),
      DatabaseConfigModule,
      AppConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
