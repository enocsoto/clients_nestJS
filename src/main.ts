import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: false,
    }),
  )
  const configService = app.get(ConfigService)

  await app.listen(process.env.PORT);
  Logger.log(`🚀 Rest API is running on: port:${configService.get('port')}`);
}
bootstrap();
