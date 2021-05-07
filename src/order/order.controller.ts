import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';

@ApiTags("Order")
@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Get()
    @ApiOperation({
        summary: '获取全部订单信息',
    })
    findAll() {
        return this.orderService.findAll();
    }

    @Get(":_id")
    @ApiOperation({
        summary: "根据订单 Id 获取订单信息"
    })
    findOneById(@Param("_id") _id: string) {
        return this.orderService.findOneById(_id)
    }

    @Post()
    @ApiOperation({
        summary: '创建订单',
    })
    create(@Body() createDto: CreateOrderDto) {
        return this.orderService.create(createDto);
    }

    @Put(':_id')
    @ApiOperation({
        summary: '根据订单Id修改订单',
    })
    update(@Param('_id') _id: string, @Body() updateDto: CreateOrderDto) {
        return this.orderService.update(_id, updateDto);
    }

    @Delete(':_id')
    @ApiOperation({
      summary: '根据订单Id删除订单',
    })
    remove(@Param('_id') _id: string) {
      return this.orderService.remove(_id);
    }
}
