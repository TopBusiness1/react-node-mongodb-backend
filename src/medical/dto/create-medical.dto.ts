import { IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMedicalDTO {
  @ApiProperty()
  @IsString()
  readonly provider: string;

  @ApiProperty()
  @IsString()
  readonly client: string;

  @ApiProperty()
  @IsArray()
  readonly requested: object;

  @ApiProperty()
  @IsArray()
  readonly received: object;

  @ApiProperty()
  @IsString()
  readonly notes: string;
}
