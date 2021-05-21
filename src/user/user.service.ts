import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from './schema/user.schema';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>,
    ) { }

    async findAll(): Promise<any> {
        return this.userModel.find().exec()
    }

    async findOneById(_id: string): Promise<User> {
        return this.userModel.findById(_id).exec();
    }

    async create(createDto: CreateUserDto): Promise<User> {
        const createdOrder = new this.userModel(createDto);
        return createdOrder.save();
    }

    async update(_id: string, updateDto: CreateUserDto) {
        return this.userModel.findByIdAndUpdate(_id, updateDto).exec();
      }

    async remove(_id: string) {
        return this.userModel.findByIdAndDelete(_id).exec();
    }
}
