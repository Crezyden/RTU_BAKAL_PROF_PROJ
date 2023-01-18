import { Body, Controller, Delete, Get, HttpCode, Param, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDetails } from './user-details.interface';
import { ObjectId } from 'mongoose';
import * as jwtGuard from './../auth/guards/jwt.guard';
import { Auth } from '../auth/guards/jwt.guard';
// import {Userdto} from './dto/Createuser.dto'
import { NewsUserdto } from './dto/newsuser.dto';
import { Role } from '../role/schema/role.schema';
import { Roles } from '../auth/guards/roles-auth.decorator';
import { RolesGuard } from './../auth/guards/roles.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './schemas/user.schema';
import { AddRolleDto } from './dto/add-role.dto';
import { CurrentUser } from './user.decorator';

@ApiTags('Users')
@Controller('user')
export class UserController {

	constructor(private  usersService: UserService){}
	@Get('profil')
	@ApiOperation({summary: 'Get users date'})
	@ApiResponse({status: 200, type: User})
	// @Auth()
	@UseGuards(jwtGuard.Auth)	
	getUser(@CurrentUser('id') id:string){
		// console.log(id)
		const users = this.usersService.getUser(id)
		return users
	}
	
	@ApiOperation({summary: 'Get all users'})
	@ApiResponse({status: 200, type:[User]})
	@Roles('Admin')
	@UseGuards(RolesGuard)
	@Get()
	getAllUser(){
		return this.usersService.getAllUser();
	}
	@Post('roles')
	@Roles('Admin')
	@ApiOperation({summary: 'Distribute roles'})
	@ApiResponse({status: 200,})
	// @UseGuards(RolesGuard)
	addroles(@Body() dto: AddRolleDto){
		return this.usersService.Addroles(dto);
	}
	
	@Delete('delete')
	@ApiOperation({summary: 'Delete users'})
	@ApiResponse({status: 200, type:User})
	@UseGuards(jwtGuard.Auth)
	delete(@Req() req) {
		return this.usersService.delete(req.user.id);
    }
	
	@Post('update')
	@ApiOperation({summary: 'Users update date'})
	@ApiResponse({status: 200, type:[User]})
	@UseGuards(jwtGuard.Auth)
	@HttpCode(200)
	// @UseInterceptors(FileInterceptor('aatar'))
	// async updateUser(@UploadedFile() files, @Param('id') id:string, @Body() dto: UserDto){
	async updateProfile(@CurrentUser('id') id:string, @Body() dto: NewsUserdto){
	  // const {avatar} = files
	  return this.usersService.updateProfile(id,dto)
	}
  
} 
