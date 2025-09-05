import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BasicAdviceDto {
  @ApiProperty({
    description: 'User skin type',
    example: 'dry',
    enum: ['dry', 'oily', 'combination', 'normal', 'sensitive'],
  })
  @IsString()
  skinType: string;

  @ApiPropertyOptional({
    description: 'User age (between 10 and 100)',
    minimum: 10,
    maximum: 100,
    example: 28,
  })
  @IsOptional()
  @IsNumber()
  @Min(10)
  @Max(100)
  age?: number;

  @ApiPropertyOptional({
    description: 'Main skin concerns or goals',
    example: 'reduce acne, hydrate skin, anti-aging',
  })
  @IsOptional()
  @IsString()
  concerns?: string;
}
