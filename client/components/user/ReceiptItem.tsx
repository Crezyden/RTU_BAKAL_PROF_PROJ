import { Box, Grid, Card, IconButton } from '@material-ui/core';
import { Myorder } from '../../types/recept.interface';
import styled from '../../styles/Create.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
// import  {Delete}  from '@material-ui/icons';

interface ReceiptItemsProps {
	receipt: Myorder
}
// function marker({receipt}){
// юfunction mark({receipt}){
var showdate = new Date()
var data = showdate.getDate() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear();
// var valperiod = {receipt.Val_period}

const ReceiptItem: React.FC<ReceiptItemsProps> = ({ receipt }) => {
	const router = useRouter()
	return (
		<div className={styled.receiptname}>
			<Grid container direction="column" className={styled.grids}>
				<div className={styled.receiptname}>{receipt.name}</div>
				<div className={styled.receiptshop}>{receipt.shop_name}</div>
			</Grid>
			<div className={styled.receiptcontent}>{receipt.city}</div>
			<div className={styled.receiptcontent}>{receipt.purc_date}</div>
			<div className={styled.receiptcontent}>{receipt.Val_period}</div>
			<div className={styled.receiptcontent}>{receipt.price}</div>
			<div className={styled.marker}>	&bull;</div>
			<button className={styled.buttonmore} onClick={() => router.push('/user/' + receipt._id)}> More</button>
			{/* <IconButton onClick={e=>e.stopPropagation}><Delete/></IconButton> */}

		</div>
	);
};

export default ReceiptItem;