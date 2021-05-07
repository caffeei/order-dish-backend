import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMealTableDto } from './dto/meal-table.dto';
import { MealTableService } from './meal-table.service';

@ApiTags("MealTable")
@Controller('meal-table')
export class MealTableController {
    constructor(private readonly mealTableService: MealTableService) { }

    @Get()
    @ApiOperation({
        summary: "获取全部的餐桌信息"
    })
    findAll() {
        return this.mealTableService.findAll();
    }

    @Get(':_id')
    @ApiOperation({
        summary: '根据菜品id获取单个餐桌信息',
    })
    getById(@Param('_id') _id: string) {
        return this.mealTableService.findOneById(_id);
    }

    @Post()
    @ApiOperation({
        summary: "新建餐桌"
    })
    create(@Body() createDto: CreateMealTableDto) {
        return this.mealTableService.create(createDto)
    }

    @Put(':_id')
    @ApiOperation({
        summary: '根据餐桌Id修改餐桌信息',
    })
    update(@Param('_id') _id: string, @Body() updateDto: CreateMealTableDto) {
        return this.mealTableService.update(_id, updateDto);
    }

    @Delete(':_id')
    @ApiOperation({
        summary: '根据餐桌Id删除餐桌',
    })
    remove(@Param('_id') _id: string) {
        return this.mealTableService.remove(_id);
    }
}
