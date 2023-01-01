import styles from '../../../styles/Create.module.scss';
import {Card, Grid} from'@material-ui/core'
// import { module } from './../../.next/static/webpack/pages/user/create.04004f2a811af249.hot-update';
import UseLayout from '../../../layouts/user/UseLayout';
import FileUploud from '../../../component/user/FileUploud';

export default function(){
	return (
		<UseLayout>
			<Grid container justifyContent='center'>
				<Card  style={{width: 900}}>
					<Grid  className='card'>
						<h1 className={styles.h1}>Add document</h1>
								
						<div className={styles.form} > 
							<div className={styles.item}>
								Add document
								<FileUploud file={''} setFile={()=>({})} accept="image">
									<button className='filebuton'>Upload file</button>
								</FileUploud> 
							</div>
							<div className={styles.item}>
								<label className={styles.label}>Product name</label>
								<input type='text' />
							</div>
							<div className={styles.item}>
								<label className={styles.label}>Shop name</label>
								<input type='text' />
							</div>
							<div className={styles.item}>
								<label className={styles.label}>City</label>
								<input type='text' />
							</div>
							<div className={styles.item}>
								<label className={styles.label}>Date of purchase</label>
								<input className={styles.data} type='date' />
							</div>	
							{/* <div className={styles.item}>
								<label className={styles.label}>Warranty expiration date</label>
								<input className={styles.data} type='date' />
								<input className={styles.button} type='button' value='Add tag'/>
							</div> */}
							<div className={styles.button}>
							<input type='button' value='Add a receipt'/>

							</div>
						</div>
					</Grid>
				</Card>
				{/* <Card>btfv</Card> */}
			</Grid>
		</UseLayout>
	);
};

// export default create;