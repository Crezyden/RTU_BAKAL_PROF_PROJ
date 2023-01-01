import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './schema/role.schema';
@ApiTags('Role')
@Controller('/roles')
export class RoleController {

	constructor(private roleService:RoleService){}

	@Post()
	@ApiOperation({summary:'Add news role'})
	@ApiResponse({status: 201, type: [Role]  })
	create(@Body() dto: CreateRoleDto){
		return this.roleService.createRole(dto)
	}
	
	@Get('/:value')
	@ApiOperation({summary:'Get parametr role'})
	@ApiResponse({status: 200, type: [Role]  })
	getByValue(@Param('value') value: string){
		return this.roleService.getRoleByValue(value)
	}
	@ApiOperation({summary:'Get all role'})
	@ApiResponse({status: 200, type: Role})
	@Get()
	getAllRole(){
		return this.roleService.getAllRole()
	}
}

