import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppConfigModule} from "./config/app/config.module";
import {TypeOrmConfigModule} from "./config/typeorm/typeorm.module";
import {DatabaseConfigModule} from "./config/database/config.module";
import {TypeOrmModule} from "@nestjs/typeorm";
/*Entities*/
import {User} from "./database/entities/user.entity";
import {Pet} from "./database/entities/pet.entity";
/*Pets Module*/
import { PetsModule } from './pets/pets.module';


@Module({
  imports: [
      TypeOrmConfigModule,
      TypeOrmModule.forFeature([User, Pet]),
      DatabaseConfigModule,
      AppConfigModule,
      PetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
