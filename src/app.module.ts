import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import appConfig from './config/app.config'
import { BasicAdviceModule } from './controllers'
import { LlmModule } from './llm'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [appConfig],
      isGlobal: true,
    }),
    BasicAdviceModule,
    LlmModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
