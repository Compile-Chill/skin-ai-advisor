import { Module } from '@nestjs/common';
import { BasicAdviceModule } from './controllers';

@Module({
  imports: [BasicAdviceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
