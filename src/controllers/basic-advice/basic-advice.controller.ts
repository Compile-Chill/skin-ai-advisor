import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags, ApiBody } from '@nestjs/swagger'

import { BasicAdviceDto } from './basic-advice.dto'
import { BasicAdviceService } from './basic-advice.service'

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
    return this.basicAdviceService.generateAdvice(dto)
  }
}
