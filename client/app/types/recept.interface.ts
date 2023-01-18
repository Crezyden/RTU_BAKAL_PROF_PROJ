import { IBase } from "./base.interface";

export interface IReceipt extends IBase{
	name: string;
	shop_name: string;
	price: string;
	recfile: string;
	city: string;
	purc_date: string;
	desc: string

}

export interface IReceiptDto extends Pick<IReceipt, 'id' | 'name'| 'price' | 'recfile'| 'shop_name'| 'desc'>{
	
}