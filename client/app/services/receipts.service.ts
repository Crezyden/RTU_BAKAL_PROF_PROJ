import { axiosClassic } from "../api/axios"
import { IReceipt } from './../types/recept.interface';

export const RECEIPT = 'receipt'
export const ReceiptService={
	async getAll(){
		return axiosClassic.get<IReceipt[]>(`/${RECEIPT}`)
	},
	async getRecepts(id:string){ 
		return axiosClassic.get<IReceipt>(`/${RECEIPT}/${id}`)
	}
}