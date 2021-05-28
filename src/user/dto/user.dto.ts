import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  type: "admin" | "user";
  @ApiProperty()
  _id: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
}