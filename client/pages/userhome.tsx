import React from 'react';
// import styles from '../../../styles/Create.module.scss'
import { useRouter } from 'next/router';
import { IReceipt } from '../app/types/recept.interface'; 
import ReceiptList from '../app/component/ui/receipt-item/ReceiptList';
import Layout from '../app/component/layout/Layout';
import { Card, Grid } from '@mui/material';
import styles from '../app/component/ui/receipt-item/ReceipItem.module.scss'
import Filter from '../app/component/ui/filter/Filter';

const Index  = () => {
	const router = useRouter()
	const recept: IReceipt[] =[
		{id: '1', name: "IPhone ", shop_name: "RD veikals", price: "600", city: "Liepaja", recfile:'', purc_date: "20.12.2022", desc: ""},
		{id: '2', name: "Fodd", shop_name: "Rimi", price: "50", city: "Liepaja", recfile:'', purc_date: "20.12.2022", desc: "Order from supermarket"},
		{id: '3', name: "Printer ", shop_name: "", price: "1000", city: "Liepaja", recfile:'', purc_date: "02.02.2022", desc: "Orders printer"},
	
	]
	
	return (
		<Layout title='Users profile'>
			{/* <Headeradmin/> */}
			<div className='container'>
				<h1 className={styles.h1}>YOUR DOCUMENTS</h1>
			<div className={styles.grid}>
				<div className={styles.card}>
					<div className={styles.grid}>
						<div className={styles.cardlist}>
							<div className={styles.cardleft}> 	
								<ReceiptList receipt={recept}/>
							</div>
							<div className={styles.cardright}>
								<Filter/> 	
							</div>
						</div>
					</div>	
				</div>
				</div>			
			</div>
		</Layout>
	);
};

export default Index;