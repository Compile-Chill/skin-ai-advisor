import { Module } from '@nestjs/common';
import { BasicAdviceModule } from './modules';

@Module({
  imports: [BasicAdviceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
