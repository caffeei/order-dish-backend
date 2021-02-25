import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Order-Dish Web System APIs Doc')
    .setDescription('点餐系统接口文档')
    .setVersion('1.0')
    .addTag('baseURL', '192.168.31.78:4000')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.enableCors();
  await app.listen(4000);
}
bootstrap();
