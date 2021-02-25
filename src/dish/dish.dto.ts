import { ApiProperty } from '@nestjs/swagger';

export class CreateDishDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  state: boolean;
  @ApiProperty({
    required: false,
  })
  imgUrl: string;
}
