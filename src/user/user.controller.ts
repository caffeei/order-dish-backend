import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags("User")
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @ApiOperation({
        summary: '获取全部员工信息',
    })
    findAll() {
        return this.userService.findAll();
    }

    @Get(":_id")
    @ApiOperation({
        summary: "根据员工 Id 获取员工信息"
    })
    findOneById(@Param("_id") _id: string) {
        return this.userService.findOneById(_id)
    }

    @Post()
    @ApiOperation({
        summary: '新增员工信息',
    })
    create(@Body() createDto: CreateUserDto) {
        return this.userService.create(createDto);
    }

    @Put(':_id')
    @ApiOperation({
        summary: '根据员工Id修改员工信息',
    })
    update(@Param('_id') _id: string, @Body() updateDto: CreateUserDto) {
        return this.userService.update(_id, updateDto);
    }

    @Delete(':_id')
    @ApiOperation({
        summary: '根据员工Id删除员工信息',
    })
    remove(@Param('_id') _id: string) {
        return this.userService.remove(_id);
    }

    @Post("login")
    @ApiOperation({
        summary: '根据员工用户名和密码登录',
    })
    login(@Body() loginDto:LoginDto) {
        return this.userService.userLogin(loginDto);
    }
}

