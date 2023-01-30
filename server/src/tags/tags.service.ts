import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { ReceptDocument } from '../receipt/schemas/receipt.schema';
import { UserDocument } from '../user/schemas/user.schema';
import { Tags, TagsDocument } from './schemas/tags.schema';
import { TagsDto } from './dto/tags.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class TagsService {

constructor(@InjectModel('Receipt') private receiptModel: Model<ReceptDocument>,
			@InjectModel('Tags') private tagModel:   Model<TagsDocument>, 
			@InjectModel('User') private userModel:   Model<UserDocument>, 
			private UserServise: UserService, 
			){}

async create(email:string, dto: TagsDto):Promise <Tags>{
	const user = await this.UserServise.findByEmail(email)  
	const tags = await this.tagModel.create(dto)
	await tags.$set('user', user); 
	// tags.user.tags=[tags]
	tags.save();
	user.save();
	
	return tags
}

async getAll(id:string): Promise<Tags[]> {
	const tags = await this.tagModel.find({user:id})	
	return tags
}

async getOne(id: ObjectId): Promise<Tags> {
	const tags = await this.tagModel.findById(id)	
	return tags
}

async delete(id: ObjectId): Promise<ObjectId> {
	const tags = await this.tagModel.findByIdAndDelete(id)	
	return tags._id
}


}