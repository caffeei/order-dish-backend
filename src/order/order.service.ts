import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDocument, Order } from './schema/order.schema';
import { CreateOrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel('Order') private readonly orderModel: Model<OrderDocument>,
    ) { }

    async findAll(): Promise<any> {
        return this.orderModel.find().exec()
    }

    async findOneById(_id: string): Promise<Order> {
        return this.orderModel.findById(_id).exec();
    }

    async create(createDto: CreateOrderDto): Promise<Order> {
        const createdOrder = new this.orderModel(createDto);
        return createdOrder.save();
    }

    async update(_id: string, updateDto: CreateOrderDto) {
        return this.orderModel.findByIdAndUpdate(_id, updateDto).exec();
      }

    async remove(_id: string) {
        return this.orderModel.findByIdAndDelete(_id).exec();
    }
}
