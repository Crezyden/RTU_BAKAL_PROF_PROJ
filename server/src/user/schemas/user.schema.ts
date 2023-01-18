import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from "mongoose";
import * as mongoose from "mongoose";
import { Role } from '../../role/schema/role.schema';
import { Timestamp } from 'typeorm';
import { Receipt } from '../../receipt/schemas/receipt.schema';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {
	
	id: mongoose.Types.ObjectId;
	@ApiProperty({example: 'user@gmail.com', description: 'Unique email'})
	@Prop({required: true, unique: true})
	email: string;
	
	@ApiProperty({example: 'Users', description: 'Users name'})
	@Prop({required: false})
	name: string;
	
	@ApiProperty({example: '1234567', description: 'Users password'})
	@Prop({required: true})
	password: string;
	
	@ApiProperty({example: 'users.icons.jpg', description: 'Users avatar'})
	@Prop({required
		: false,})
	avatarPath: string;
	
	@ApiProperty({example: '+37129994512', description: 'Phone'})
	phone: string;
	@ApiProperty({example: 'Rīga', description: 'City'})
	city: string;
	
	@ApiProperty({example: 'role', description: 'Users role[]'})
	@Prop({type: mongoose.Schema.Types.Array, ref: 'role'})
	role: Role[];
	
	@ApiProperty({example: 'receipt', description: 'All users receipt[]'})
	@Prop({type:[{ type: mongoose.Schema.Types.ObjectId, ref:'Receipt'}]})
	receipt: Receipt[];
	
	

}
export const UserSchema = SchemaFactory.createForClass(User);