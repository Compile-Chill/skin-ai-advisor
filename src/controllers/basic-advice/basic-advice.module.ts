import { Module } from '@nestjs/common'

import { LlmModule } from '../../llm'

import { BasicAdviceController } from './basic-advice.controller'
import { BasicAdviceService } from './basic-advice.service'

@Module({
  imports: [LlmModule],
  controllers: [BasicAdviceController],
  providers: [BasicAdviceService],
})
export class BasicAdviceModule {}
