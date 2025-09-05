import { IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';

export class BasicAdviceDto {
  @IsString()
  skinType: string;

  @IsOptional()
  @IsNumber()
  @Min(10)
  @Max(100)
  age?: number;

  @IsOptional()
  @IsString()
  concerns?: string;
}
