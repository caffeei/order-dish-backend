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
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Dish')
@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get("/:pageNum/:pageSize")
  @ApiOperation({
    summary: '获取全部菜品信息分页展示',
  })
  @UsePipes(new ParseIntPipe())
  getAll(@Param("pageNum") pageNum: number, @Param("pageSize") pageSize: number) {
    return this.dishService.findAll(pageNum, pageSize);
  }

  @Get()
  @ApiOperation({
    summary: '获取全部菜品信息',
  })
  @UsePipes(new ParseIntPipe())
  getDish() {
    return this.dishService.findDish();
  }


  @Get(':_id')
  @ApiOperation({
    summary: '根据菜品id获取单个菜品信息',
  })
  getById(@Param('_id') _id: string) {
    return this.dishService.findOneById(_id);
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
