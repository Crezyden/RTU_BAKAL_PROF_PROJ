import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NewsUserdto } from '../user/dto/newsuser.dto';
import { LoginUserdto } from '../user/dto/Createuser.dto';
import { AuthService } from './auth.service';
@ApiTags('Autorization')
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({summary: 'User sign up '})
  @Post('/register')
  register(@Body() user: NewsUserdto): Promise<any> {
    return this.authService.register(user);
  }
  @ApiOperation({summary:'User sign in'})
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  login(@Body() userDto: LoginUserdto) {
    return this.authService.login(userDto);
  }
}
