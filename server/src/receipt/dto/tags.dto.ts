import { ObjectId } from 'mongoose';

export class TagsDto{
	readonly tagsname: string;
	readonly description: string;
	readonly receptid: ObjectId
}