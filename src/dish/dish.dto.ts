import { ApiProperty } from '@nestjs/swagger';

export class CreateDishDto {
  @ApiProperty()
  dishName: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  status: boolean;
  @ApiProperty({
    required: false,
  })
  imgUrl: string;
}
