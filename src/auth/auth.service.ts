import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(username);
    if (user && user.password === this.usersService.hashedPassword(pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const userFullName = user.firstName + " "+ user.lastName;
    const payload = { username: user.username, sub: user.userId, userName: userFullName };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}