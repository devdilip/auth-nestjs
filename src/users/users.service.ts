import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import * as crypto from 'crypto';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    }

    async findById(id: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                id: id,
            }
        });
    }

    async createUser(firstName: string, lastName: string, email: string, password: string): Promise<User> {
        const user = new User(firstName, lastName, email, password);
        return await this.userRepository.save(user);
    }

    hashedPassword(password: string){
        return crypto.createHmac('sha256', password).digest('hex');
    }

}