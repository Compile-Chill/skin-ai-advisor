import { Logger, ValidationPipe, VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as fs from 'fs'

import { AppModule } from './app.module'
import { getLogLevels } from './config'

async function bootstrap() {
  const logLevels = getLogLevels()

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: logLevels,
  })

  const configService = app.get(ConfigService)
  const logger = new Logger(bootstrap.name)

  // Versioning
  app.enableVersioning({
    type: VersioningType.URI,
  })

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Skin AI Advisor API')
    .setDescription('API for generating skincare recommendations using AI')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  // Pipes
  app.useGlobalPipes(new ValidationPipe())

  const port = configService.get<string>('appConfig.appPort')
  await app.listen(port)

  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8')) as {
    name: string
    version: string
  }
  const appName = packageJson.name
  const appVersion = packageJson.version

  logger.log(`Application (${appName} v${appVersion}) running on: ${await app.getUrl()} `)
}
bootstrap()
