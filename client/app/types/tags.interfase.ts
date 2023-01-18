import { IBase } from "./base.interface";
import { IUser } from "./user.interface";

export interface ITags extends IBase{
	name: string; 
	description: string;
	user?: IUser;	
}