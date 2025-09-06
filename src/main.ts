import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { setupSwagger } from './configs/swagger.config';
import helmet from 'helmet';
import { AllExceptionsFilter } from './filters/globalError.filter';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new ValidationPipe(
    {
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      return new BadRequestException(
        validationErrors.map((error) => Object.values(error.constraints).join('; ')).join('; ')
        )
    }
  }
  ))
  app.use(helmet());
  app.enableCors();
  setupSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}


bootstrap();
