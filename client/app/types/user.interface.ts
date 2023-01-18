import { IReceipt } from "./recept.interface";
import { IRole } from "./role.interface";

export interface IUser {
		
	id: string
	email: string;
	name: string;
	password: string;
	avatarPath: string;
	phone: string;
	city: string;
	role: IRole[];
	receipt?: IReceipt[];	
}