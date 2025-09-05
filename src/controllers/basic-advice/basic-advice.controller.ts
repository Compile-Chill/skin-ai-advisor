import { Body, Controller, Post } from '@nestjs/common';
import { BasicAdviceService } from './basic-advice.service';
import { BasicAdviceDto } from './basic-advice.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller({
  path: 'basic-advice',
  version: '1',
})
@ApiTags('Basic Advice')
export class BasicAdviceController {
  constructor(private readonly basicAdviceService: BasicAdviceService) {}

  @Post()
  async recommend(@Body() dto: BasicAdviceDto) {
    return this.basicAdviceService.generateAdvice(dto);
  }
}
