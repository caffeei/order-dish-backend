import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, User } from './schema/user.schema';
import { CreateUserDto } from './dto/user.dto';
import { LoginDto } from './dto/login.dto';

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

    async userLogin(loginDto: LoginDto): Promise<Object> {
        const user = await this.userModel.findById(loginDto._id).exec();
        const res:any = {};
        res.currentAuthority = user.type;
        user.password === loginDto.password 
            ? res.status="ok" 
            : res.status="error";
        return res;
    }

    // async findOneByUsername(username: string)

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
