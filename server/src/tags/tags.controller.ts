import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { CreateRoleDto } from '../role/dto/create-role.dto';
import { Tags } from './schemas/tags.schema';
import { TagsService } from './tags.service';
import * as jwtGuard from './../auth/guards/jwt.guard';
import { CurrentUser } from '../user/user.decorator';
import { TagsDto } from './dto/tags.dto';
@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get('')
	@ApiOperation({summary: 'Get Tags'})
	@ApiResponse({status: 200, type: Tags})
	@UseGuards(jwtGuard.Auth)	
	getAll(@CurrentUser('id') id: string){
		const tags = this.tagsService.getAll(id)
		return tags
	}
  @Get(':id')
	@ApiOperation({summary: 'Get Tags'})
	@ApiResponse({status: 200, type: Tags})
	@UseGuards(jwtGuard.Auth)	
	getOne(@CurrentUser('id') users: ObjectId){
		// console.log(id)
		const tags = this.tagsService.getOne(users)
		return tags
	}
	
	@Post()
	@ApiOperation({summary:'Add news role'})
	@ApiResponse({status: 201, type: [Tags]  })
	@UseGuards(jwtGuard.Auth)	
	create(@Req() req, @Body() dto: TagsDto){
		return this.tagsService.create(req.user.email,dto)
	}
  @ApiOperation({summary:'Delete tags'})
  @ApiResponse({status: 200, type: Tags })
  @Delete(':id')
  @UseGuards(jwtGuard.Auth)
  delete(@Param('id') id: ObjectId): any {
    return this.tagsService.delete(id);
  }
}