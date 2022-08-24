import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExeceptionFilter } from './http-exeception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExeceptionFilter());
  await app.listen(3000);
}
bootstrap();
