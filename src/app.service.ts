import { Injectable } from '@nestjs/common';
import { IResponse } from "./app.controller";
import { AppConfigService } from "./config/app/config.service";
import { User } from "./database/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AppService {

  constructor(
      private readonly appConfig: AppConfigService,
      @InjectRepository(User)
      private readonly userRepo: Repository<User>
  ) {
  }

  getHello(): IResponse {
    return {
      appName: this.appConfig.name,
      appUrl: this.appConfig.url,
      appPort: this.appConfig.port,
    };
  }

  sayHi(): string{
    return 'Buenas tardes'
  }

  async getAllUsers(): Promise<User[]>{
    return await this.userRepo.find()
  }

  async getUser(userId): Promise<User>{
    return await this.userRepo.findOne(userId)
  }
}
