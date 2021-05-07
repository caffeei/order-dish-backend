import { ApiProperty } from "@nestjs/swagger";

export class CreateMealTableDto {
    @ApiProperty()
    _id: string;
  
    @ApiProperty()
    size: string;
  
    @ApiProperty()
    status: boolean; 
}