import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsString, IsOptional, IsNumber, Min, Max, IsEnum } from 'class-validator'

import { SkinType } from '../../commons'

export class BasicAdviceDto {
  @ApiProperty({
    description: 'User skin type',
    enum: SkinType,
    example: SkinType.DRY,
  })
  @IsEnum(SkinType, { message: 'skinType must be one of: dry, oily, combination, normal, sensitive' })
  skinType: SkinType

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
  age?: number

  @ApiPropertyOptional({
    description: 'Main skin concerns or goals',
    example: 'reduce acne, hydrate skin, anti-aging',
  })
  @IsOptional()
  @IsString()
  concerns?: string
}
