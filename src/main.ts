import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExeceptionFilter } from './http-exeception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MyLoggingInterceptor } from './my-logging.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExeceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('嘴巴嘟嘟的文档')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalInterceptors(new MyLoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
