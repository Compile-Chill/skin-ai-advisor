import { Injectable } from '@nestjs/common';
import { BasicAdviceDto } from './basic-advice.dto';

@Injectable()
export class BasicAdviceService {
  async generateAdvice(dto: BasicAdviceDto) {
    const { skinType, age, concerns } = dto;

    return {
      message: 'Generic skincare recommendation',
      skinType,
      age,
      concerns,
      recommendation: `For ${skinType} skin, focus on gentle cleansing and hydration. ${
        concerns ? `Pay attention to ${concerns}.` : ''
      }`,
    };
  }
}
