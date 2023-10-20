import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';



async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter()); // Use ExpressAdapter
  app.enableCors({
    origin:['http://localhost:3000']
  })
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(4000);
}
bootstrap();


