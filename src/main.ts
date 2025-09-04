import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { setupSwagger } from './configs/swagger.config';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(helmet);
  app.enableCors();
  setupSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}


bootstrap();
