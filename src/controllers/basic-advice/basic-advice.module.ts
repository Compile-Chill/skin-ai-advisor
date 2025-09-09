import { Module } from '@nestjs/common';
import { BasicAdviceController, BasicAdviceService } from '.';
import { LlmModule } from 'src/llm';

@Module({
  imports: [LlmModule],
  controllers: [BasicAdviceController],
  providers: [BasicAdviceService],
})
export class BasicAdviceModule {}
