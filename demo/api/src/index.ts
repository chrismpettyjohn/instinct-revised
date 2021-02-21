import 'dotenv/config';
import cors from 'cors';
import {NestFactory} from '@nestjs/core';
import {useContainer} from 'class-validator';
import {ValidationPipe} from '@nestjs/common';
import {InstinctRoleplayAppModule} from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    InstinctRoleplayAppModule
  );

  app.use(cors());

  app.set('trust proxy', true);

  useContainer(app.select(InstinctRoleplayAppModule), {fallbackOnErrors: true});

  app.useGlobalPipes(new ValidationPipe({transform: true}));

  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT!);
}

bootstrap();
