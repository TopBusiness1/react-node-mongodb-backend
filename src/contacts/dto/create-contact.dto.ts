import { IsString, IsArray, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDTO {
  @ApiProperty()
  @IsObject()
  readonly name: object;

  @ApiProperty()
  @IsObject()
  readonly company: object;

  @ApiProperty()
  @IsObject()
  readonly address: any[];

  @ApiProperty()
  @IsArray()
  readonly phone: any[];

  @ApiProperty()
  @IsObject()
  readonly biography: object;

  @ApiProperty()
  @IsObject()
  readonly marketing: object;

  @ApiProperty()
  @IsString()
  readonly notes: string;

  @ApiProperty()
  @IsString()
  contactType: string;
}
