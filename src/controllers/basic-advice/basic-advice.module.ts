import { Module } from '@nestjs/common';
import { BasicAdviceController, BasicAdviceService } from '.';

@Module({
  controllers: [BasicAdviceController],
  providers: [BasicAdviceService],
  exports: [],
})
export class BasicAdviceModule {}
