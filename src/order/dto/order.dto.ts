import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  tableId: string;
  @ApiProperty()
  personNum: number;
  @ApiProperty()
  dishAll: [];
  @ApiProperty()
  totalPrice: number;
  @ApiProperty()
  status: boolean;
  @ApiProperty()
  username: string;
}