import { Injectable } from '@nestjs/common';
import { BasicAdviceDto } from './basic-advice.dto';
import { LlmService } from '../../llm';

@Injectable()
export class BasicAdviceService {
  constructor(private readonly llmService: LlmService) {}

  async generateAdvice(dto: BasicAdviceDto) {
    const { skinType, age, concerns } = dto;
    const llmResponse = await this.llmService.generate(`Give skincare advice for a ${age} year old with ${skinType} skin and concerns about ${concerns}.`);

    return llmResponse;
  }
}
