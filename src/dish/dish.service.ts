import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateDishDto } from './dish.dto';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dish, DishDocument } from './dish.schema';

@Injectable()
export class DishService {
  constructor(
    @InjectModel('Dish') private readonly dishModel: Model<DishDocument>,
  ) { }

  async findAll(pageNum: number, pageSize: number): Promise<any> {
    const data = await this.dishModel.find().skip((pageNum - 1) * pageSize).limit(pageSize).exec();
    const total = await this.dishModel.countDocuments().exec();
    return {
      data,
      total,
      pageNum,
      pageSize
    }
  }

  async findDish(): Promise<any> {
    return this.dishModel.find().exec()
  }

  async findOneById(_id: string): Promise<Dish> {
    return this.dishModel.findById(_id).exec();
  }

  async create(createDto: CreateDishDto): Promise<Dish> {
    const createdDish = new this.dishModel(createDto);
    return createdDish.save();
  }

  async update(_id: string, updateDto: CreateDishDto) {
    return this.dishModel.findByIdAndUpdate(_id, updateDto).exec();
  }

  async remove(_id: string) {
    return this.dishModel.findByIdAndDelete(_id).exec();
  }
}
