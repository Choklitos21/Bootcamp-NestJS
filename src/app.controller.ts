import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {User} from "./database/entities/user.entity";

export interface IResponse {
  appName: string,
  appUrl: string,
  appPort: number,
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IResponse {
    return this.appService.getHello();
  }

  @Get('sayHi')
  getConst(){
    return this.appService.sayHi()
  }

  @Get('users/')
  getAllUsers(): Promise<User[]>{
    return this.appService.getAllUsers()
  }

  @Get('users/:userId')
  getUser(
      @Param('userId') userId: number
  ): Promise<User>{
    return this.appService.getUser(userId)
  }

}
