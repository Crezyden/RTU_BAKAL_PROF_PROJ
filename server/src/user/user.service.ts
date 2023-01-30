import { BadRequestException, HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { UserDetails } from './user-details.interface';
import { RoleService } from './../role/role.service';
import { Delete } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { NewsUserdto } from './dto/newsuser.dto';
// import {UserDto} from './dto/Createuser.dto'
import { AddRolleDto } from './dto/add-role.dto';
import { AuthService } from '../auth/auth.service';
import { ReceptDocument } from '../receipt/schemas/receipt.schema';
// import { users } from './../../../client/server/data/users';


@Injectable()
export class UserService {
	constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>,
		@InjectModel('Recept') private readonly receptModel: Model<ReceptDocument>,
		private roleService: RoleService,
		// private authservice: AuthService
		// private roleService:  RoleService
	) { }

	async create(userDto: NewsUserdto): Promise<UserDocument> {
		const role = await this.roleService.getRoleByValue("Users");
		const user = await this.userModel.create(userDto);
		user.$set('role', [role.id]);
		user.role = [role];
		return user.save()
	}

	async getAllUser() {
		const user = await this.userModel.find({ include: { all: true } });
		return user;
	}

	async getUser(id: string) {
		const user = await this.userModel.findById(id)
		return user;
	}

	async delete(id: string): Promise<ObjectId> {
		const user = await this.userModel.findByIdAndDelete(id)
		return user._id
	}

	_getUserDetails(user: UserDocument): UserDetails {
		const { id, name, email, phone, city } = user
		return { id, name, email, phone, city };
	}

	async findByEmail(email: string): Promise<UserDocument | null> {
		return this.userModel.findOne({ email });
	}
	async findByIdd(id: string): Promise<UserDocument> {
		return await this.userModel.findById(id).populate('receipt');
	}


	async findById(id: string): Promise<UserDetails | null> {
		const user = await this.userModel.findById(id).exec();
		if (!user) return null;
		return this._getUserDetails(user)
	}

	async updateProfile(id: string, dto: NewsUserdto) {
		const user = await this.userModel.findById(id);
		const isSamwUser = await this.findByEmail(dto.email)
		if (isSamwUser && id !== isSamwUser.id) throw new BadRequestException('email is busy')
		const { email, name, phone, city } = dto
		console.log(dto, id)
		await this.userModel.updateOne({ _id: id }, {
			$set: dto
		})
		// if(users.password !== dto.password){
		// 	users.password = await bcrypt.compare(
		// 		dto.password,
		// 		users.password,
		// 		);
		// } 

		return { email, name, phone: phone || '', city: city || '' }

		// const hashedPassword = await this.authservice.hashedPassword(password: dto)	
	}

	async Addroles(dto: AddRolleDto) {
		const user = await this.userModel.findById(dto.Userid)
		console.log(user)
		const role = await this.roleService.getRoleByValue(dto.value)
		console.log()
		if (role && user) {
			await user.$set('role', role.id);
			user.role = [role];
			user.save()
			return user
		} else {
			throw new HttpException('Users or roles not found', HttpStatus.NOT_FOUND);
		}
	}
}