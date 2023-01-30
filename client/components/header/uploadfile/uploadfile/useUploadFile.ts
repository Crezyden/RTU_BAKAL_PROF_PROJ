import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IReceiptDto } from '../../../../../types/recept.interface';
import { receiptApi } from './../../../../account/api/receipt.api';
import { useState } from 'react';

interface IUseUploadFileForm{
	handleCloseModal: () => void
	receiptId: string
} 

export const useUploadFile = ({	

	handleCloseModal,
	receiptId
}: IUseUploadFileForm) =>{
	const{ register, formState:{error}, control, handleSubmit, watch, setValue, reset} = useForm<IReceiptDto>({
		mode: 'onChange'
	}) 
	
	const [updateReceip,{isSuccess}] = receiptApi.useCreateReceiptMutation()

	const onSubmit: SubmitHandler<IReceiptDto> =  data =>{
		updateReceip({...data, id: receiptId})
		.unwrap()
		.then(() =>{
			handleCloseModal()
			reset()
		})	
	}
	
	const receipPath =watch('receipPath')
	const thumbnailPath = watch('thumbnailPath')
	const [receipFileName , setReceipFileName] = useState('')

	const handleUploadReeceip = value: I
}
