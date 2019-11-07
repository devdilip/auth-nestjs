import { Controller, Get, Request, Post, Logger, Body, UseGuards, Param, UseInterceptors, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserContrller {
    constructor(private readonly userService: UsersService) { }

    @Post('register')
    async register(
        @Body('name') name: string,
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string) {
        return this.userService.createUser(name, username, email, password);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async getUserDetails(@Param('id') userId: string) {
        const user = await this.userService.findById(userId);
        if (user === undefined) {
            throw new NotFoundException('User details not found');
        }
        return user;
    }

}