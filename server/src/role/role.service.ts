import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiTags } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleDocument } from './schema/role.schema';
@Injectable()
export class RoleService {

	constructor(@InjectModel('Role') private roleRepository: Model<RoleDocument>){}
	async getAllRole(){
		const role = await this.roleRepository.find();
		return role;
	}
	async createRole(dto: CreateRoleDto){
		const role = await this.roleRepository.create(dto)
		return role
	}
	async getRoleByValue(value: string){
		const role = await this.roleRepository.findOne({value})
		return role

	}
}
