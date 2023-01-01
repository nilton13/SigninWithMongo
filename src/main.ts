import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração Swagger
  const config = new DocumentBuilder()
    .setTitle('Authentication')
    .setDescription('The simple system authentication using Jwt and MongoDB.')
    .setVersion('1.0')
    //.addTag('')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  //Fim configuração Swagger

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
