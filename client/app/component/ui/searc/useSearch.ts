import { ChangeEvent, useState } from 'react';
import { useDebounce } from './../../../hooks/useDebounce';
import { receiptApi } from './../../account/api/receipt.api';
export const useSearch =()=>{
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>)=>{{
		setSearchTerm(e.target.value)
	}}

	const [data, isSuccess] = receiptApi.
	return {}
}