import { Box, Grid, Card } from '@material-ui/core';
import { Myorder } from '../../../app/types/recept.interface';
import ReceiptItem from './ReceiptItem';
import styled from '../../styles/Create.module.scss'
import Filter from './Filter';

interface ReceiptListProps{
	receipt: Myorder[]
}
const ReceiptList: React.FC<ReceiptListProps> = ({receipt}) => {
	return (
		<Grid container direction='column'>
			<h1>YOU RECEIPT</h1>
			<Card className={styled.cardlist}> 
				<Card className={styled.cardleft}>
					{receipt.map(receipt=>
						<ReceiptItem
						key={receipt._id}
						receipt={receipt}
						/>	
						)}
				</Card>
				<Card className={styled.cardright}>
					<Filter/>
				</Card>
			</Card>
		</Grid>
	);
};

export default ReceiptList;