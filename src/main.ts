import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { addSwagger } from './add-swagger';
import { Logger, INestApplication } from '@nestjs/common';
import * as fmp from 'fastify-multipart';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import 'reflect-metadata';

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter();

  fastifyAdapter.register(fmp, {
    limits: {
      fieldNameSize: 100,
      fieldSize: 1000000,
      fields: 10,
      fileSize: 100,
      files: 1,
      headerPairs: 2000,
    },
  });

  let app: INestApplication = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );

  app = addSwagger(app);
  app.enableCors();
  app.setGlobalPrefix('/api');

  const logger = new Logger();

  await app.listen(5000, () => {
    logger.log(`Listening on port 5000`);
  });
}
bootstrap();
