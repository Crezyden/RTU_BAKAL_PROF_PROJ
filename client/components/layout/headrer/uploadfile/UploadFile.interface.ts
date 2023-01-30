import { Dispatch, SetStateAction } from "react"
// import { Receipt } from './../../../../../../server/documentation/js/search/search_index';

export interface IUploadModal {
	isOpen: boolean
	serIsOpen: Dispatch<SetStateAction<boolean>>
	receiptId: string
} 