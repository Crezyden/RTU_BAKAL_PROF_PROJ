import {
  HttpException,
  Injectable,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from './../user/user.service';
import { NewsUserdto } from './../user/dto/newsuser.dto';
import { UserDetails } from '../user/user-details.interface';
import { LoginUserdto } from '../user/dto/Createuser.dto';
import { User } from '../user/schemas/user.schema';
@Injectable()
export class AuthService {
  // constructor(){},
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
    /**
   * This requst for registrattion users
   * @param register this is the poyload for user 
   *
  **/ 
  async register(userDto: Readonly<NewsUserdto>): Promise<UserDetails | any> {
    const existingUser = await this.userService.findByEmail(userDto.email);
    if (existingUser) {
      throw new HttpException(
        'user already registered',
        HttpStatus.BAD_REQUEST,
        );
      }
      const hashedPassword = await this.hashedPassword(userDto.password);
      const newUser = await this.userService.create({
        ...userDto,
        password: hashedPassword,
      });
      return this.userService._getUserDetails(newUser);
  }
  async hashedPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }
  
  // async doesPasswordMatch(
  //   password: string,
  //   hashedPassword: string,
  //   ): Promise<boolean> {
  //     return bcrypt.compare(password, hashedPassword);
  //   }
    async login(userDto: LoginUserdto) {
      const user = await this.validateUser(userDto);
      const token = this.generateToken(user);
      return token;
    }
    private async validateUser(userDto: LoginUserdto) {
      const user = await this.userService.findByEmail(userDto.email);
      const doesPasswordMatch = await bcrypt.compare(
        userDto.password,
        user.password,
        );
        if (user && doesPasswordMatch) {
          return user;
        }
        throw new UnauthorizedException({
          message: 'Incorrect email and password',
        });
      }
    private async generateToken(user: User) {
      const payload = {id:user.id, email: user.email, role: user.role };
      return {
        token: this.jwtService.sign(payload),
      };
    }


}
