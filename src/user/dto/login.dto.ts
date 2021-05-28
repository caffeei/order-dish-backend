import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  readonly _id: string;
  @ApiProperty()
  readonly password: string;
}