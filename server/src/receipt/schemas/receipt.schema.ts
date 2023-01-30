import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Tags } from '../../tags/schemas/tags.schema';
import { User } from '../../user/schemas/user.schema';
import { ApiProperty } from '@nestjs/swagger';

export type ReceptDocument = Receipt & mongoose.Document;

@Schema()
export class Receipt {
	@ApiProperty({example: 'Id', description: 'receiptsId'})
  id:mongoose.Types.ObjectId;

	@ApiProperty({example: 'Sony tv ', description: 'Name receipts'})
  @Prop()
  name: string;

	@ApiProperty({example: '1a.lv', description: 'Shop'})
  @Prop({required: false})
  shop_name: string;
  
	@ApiProperty({example: '50', description: 'Price'})
  @Prop({required: false})
  price: number;

	@ApiProperty({example: 'receipts.file.jpg', description: 'purchase document'})
  @Prop({required: false})
  recfile: string;

	@ApiProperty({example: '21.12.2022', description: 'Date of purchase'})
  @Prop({required: false}) 
  purc_date: string;
  
	@ApiProperty({example: '21.12.2024', description: 'date of warranty lines'})
  @Prop({required: false})
  val_period: string;
  
  @Prop({type: [{type: mongoose.Schema.Types.Array, ref:'Tags'}]})
  tags: Tags[];
  
	@ApiProperty({example: 'Users[]', description: 'Users'})
  @Prop({type: mongoose.Schema.Types.ObjectId, ref:'User'})
  user: User
  

}

export const ReceiptSchema = SchemaFactory.createForClass(Receipt);