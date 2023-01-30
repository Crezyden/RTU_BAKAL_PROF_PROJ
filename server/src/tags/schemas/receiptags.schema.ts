import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document} from "mongoose";
import { Receipt } from '../../receipt/schemas/receipt.schema';
import { User } from '../../user/schemas/user.schema';
import { Tags } from './tags.schema';
// import { User } from '@nextui-org/react';

export type RoleUserDocument = TagsReceip & Document;

@Schema()
export class TagsReceip{
	
	
	@Prop({type: mongoose.Schema.Types.Array, ref: 'User'})
	receipId: Receipt;
	
	
	@Prop({type: mongoose.Schema.Types.Array, ref: 'role'})
	tagsId: Tags;


}
export const RoleUserSchema = SchemaFactory.createForClass(TagsReceip);