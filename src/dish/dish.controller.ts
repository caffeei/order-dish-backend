import { CreateDishDto } from './dish.dto';
import { DishService } from './dish.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Dish')
@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get()
  @ApiOperation({
    summary: '获取全部菜品信息',
  })
  getAll() {
    return this.dishService.getAll();
  }

  @Get(':_id')
  @ApiOperation({
    summary: '根据菜品id获取单个菜品信息',
  })
  getById(@Param('_id') _id: string) {
    return this.dishService.getById(_id);
  }

  @Post()
  @ApiOperation({
    summary: '创建菜品',
  })
  create(@Body() createDto: CreateDishDto) {
    return this.dishService.create(createDto);
  }

  @Put(':_id')
  @ApiOperation({
    summary: '根据菜品Id修改菜品',
  })
  update(@Param('_id') _id: string, @Body() updateDto: CreateDishDto) {
    return this.dishService.update(_id, updateDto);
  }

  @Delete(':_id')
  @ApiOperation({
    summary: '根据菜品Id删除菜品',
  })
  remove(@Param('_id') _id: string) {
    return this.dishService.remove(_id);
  }
}
