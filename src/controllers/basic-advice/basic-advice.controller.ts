import { Body, Controller, Post } from '@nestjs/common';
import { BasicAdviceService } from './basic-advice.service';
import { BasicAdviceDto } from './basic-advice.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller({
  path: 'basic-advice',
  version: '1',
})
@ApiTags('Basic Advice')
export class BasicAdviceController {
  constructor(private readonly basicAdviceService: BasicAdviceService) {}

  @Post()
  @ApiBody({
    description: 'User information for generating skincare advice',
    type: BasicAdviceDto,
    examples: {
      example1: {
        summary: 'Dry skin with acne tendency',
        value: {
          skinType: 'dry',
          medicalHistory: 'acne tendency, sensitive skin',
          age: 28,
          goals: 'hydrate and reduce blemishes',
        },
      },
    },
  })
  async recommend(@Body() dto: BasicAdviceDto) {
    return this.basicAdviceService.generateAdvice(dto);
  }
}
