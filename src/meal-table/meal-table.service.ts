import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MealTableDocument, MealTable } from './schema/meal-table.schema';
import { CreateMealTableDto } from './dto/meal-table.dto';

@Injectable()
export class MealTableService {
    constructor(@InjectModel('MealTable') private mealTableModel: Model<MealTableDocument>) { }

    async findAll(): Promise<MealTable[]> {
        return this.mealTableModel.find().exec()
    }

    async findOneById(_id: string): Promise<MealTable> {
        return this.mealTableModel.findById(_id).exec();
      }

    async create(createDto: CreateMealTableDto): Promise<MealTable> {
        const createMealTable = new this.mealTableModel(createDto)
        return createMealTable.save()
    }

    async update(_id: string, updateDto: CreateMealTableDto) {
        return this.mealTableModel.findByIdAndUpdate(_id, updateDto).exec();
    }

    async remove(_id: string) {
        return this.mealTableModel.findByIdAndDelete(_id).exec();
    }
}
