import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from "mongoose";
import * as mongoose from "mongoose";
import { Timestamp } from 'typeorm';
import { Receipt } from './receipt.schema';
// import { Receipt } from '../receipt/schemas/receipt.schema';


export type TagsDocument = Tags & mongoose.Document;

@Schema()
export class Tags {
	
	
	@Prop()
	tagsname: string;

	@Prop({required: false})
	description: string;

	@Prop({type: mongoose.Schema.Types.ObjectId, ref:'Receipt'})
	receptid: Receipt;
	
	

}
export const TagsSchema = SchemaFactory.createForClass(Tags);