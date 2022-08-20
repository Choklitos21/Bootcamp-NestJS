import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "@nestjs/common";
import {AppConfigService} from "./config/app/config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('/Main')
  const appConfigService: AppConfigService = app.get(AppConfigService)

  await app.listen(appConfigService.port, '0.0.0.0', () => {
    logger.log(`API Corriendo en el puerto ${appConfigService.port}`)
  });
}

bootstrap();
