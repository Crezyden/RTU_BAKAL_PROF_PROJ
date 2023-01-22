import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document, ObjectId} from "mongoose";
import { User } from '../../user/schemas/user.schema';

export type RoleDocument = Role & Document;

@Schema()
export class Role{
	
	// @ApiProperty({example: 'users', description: 'Name role'})
	// @Prop({required: true, unique: true})
	id: mongoose.Types.ObjectId; 
	
	
	@ApiProperty({example: 'users', description: 'Name role'})
	@Prop({required: true, unique: true})
	value: string; 
	
	
	@ApiProperty({example: 'users is', description: 'Description role'})
	@Prop({required: true})
	description: string;
	
	@ApiProperty({example: 'usersId', description: 'Which user this role belongs to'})
	@Prop({type: mongoose.Schema.Types.Array, ref: 'user'})
	user: User;

}
export const RoleSchema = SchemaFactory.createForClass(Role);