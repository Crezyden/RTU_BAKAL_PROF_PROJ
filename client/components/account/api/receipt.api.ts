import { IReceipt, IReceiptDto } from "../../../types/recept.interface";
import { api } from "./api";
import { RECEIPT } from '../../../services/receipts.service';

export const receiptApi = api.injectEndpoints({
	endpoints: builder => ({
		createReceipt: builder.mutation<string, void>({
			query: () =>({
				url: `/${RECEIPT}`,
				method: 'POST',
			}),
			invalidatesTags: ()=>[{ type: 'Profile'}] 
		})
	})  
})