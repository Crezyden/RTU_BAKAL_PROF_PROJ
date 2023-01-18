import { IReceipt } from '../../../types/recept.interface';
// import ReceiptItem from '../../../../component/user/ReceiptItem';
import ReceiptItem from './ReceipItem';
// import styled from '../app/component/ui/receipt-item/ReceipItem.module.scss'
import styled from '../../ui/receipt-item/ReceipItem.module.scss'
import Filter from '../../../../component/user/Filter';
import { Card, Grid } from '@mui/material';

interface ReceiptListProps{
	receipt: IReceipt[]
	kay
}
const ReceiptList: React.FC<ReceiptListProps> = ({receipt}) => {
	return (
		<>
					{receipt.map((receipt, )=>
						<ReceiptItem
						key={receipt.id}
						receipt={receipt}
						/>	
						)}
		</>
	);
};

export default ReceiptList;