import { IReceipt } from './../../../types/recept.interface';
export interface IReceiptItems {
	item: IReceipt
	removeHandler?: (receiptId: string) => void
	isUpdateLink?: boolean
	isSearch?: boolean 
	receipt: IReceipt
	isOpen, 
	onClose

}