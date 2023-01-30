import { TReceipt } from "./receipt"

export type ModalState = {
	hidden: boolean,
	type?: string,
	currentReceipt?: string
}
export type TModal = {
    receipt: TReceipt,
    isOpen: boolean,
    onClose: any,
    onEdit: any,
    disabled: boolean
}