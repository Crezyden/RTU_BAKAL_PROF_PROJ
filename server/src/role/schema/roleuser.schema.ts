import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document} from "mongoose";
import { User } from '../../user/schemas/user.schema';
import { Role } from './role.schema';
// import { User } from '@nextui-org/react';

export type RoleUserDocument = RoleUser & Document;

@Schema()
export class RoleUser{
	
	
	@Prop({type: mongoose.Schema.Types.Array, ref: 'User'})
	userId :User;
	
	
	@Prop({type: mongoose.Schema.Types.Array, ref: 'role'})
	roleId: Role;


}
export const RoleUserSchema = SchemaFactory.createForClass(RoleUser);