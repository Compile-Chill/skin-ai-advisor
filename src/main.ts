import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { PORT } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Versioning
  app.enableVersioning({
    type: VersioningType.URI,
  })

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Skin AI Advisor API')
    .setDescription('API for generating skincare recommendations using AI')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Pipes
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);

  console.log(`Server running on http://localhost:${PORT}`);

}
bootstrap();
