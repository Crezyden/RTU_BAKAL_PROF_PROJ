import styles from './ReceipItem.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { BiEdit, BiTrash } from 'react-icons/bi'
import { FaSearchPlus } from 'react-icons/fa'
import { IReceipt } from '../../../types/recept.interface';
import { IReceiptItems } from './ReceipItem.interface';
import React from 'react';
import Modwind from '../modalwindows/Modwind';


// import  {Delete}  from '@material-ui/icons';

// ({item, removeHandler,isUpdateLink})
const ReceiptItem: React.FC<IReceiptItems> =({receipt, item, removeHandler,isUpdateLink, isSearch})  => {
		const {push} = useRouter()
		const [showModal, setShowModal] = React.useState(false);
		// const {router} = useRouter()
		return (
			<div className={styles.receipt}>
				{/* {item &&( */}
					<>
					<div className={cn(styles.recitem, styles.rectexdub)}>
						<span className={styles.name}>{receipt.name}</span>
						<span className={styles.shop}>{receipt.shop_name}</span>
					</div>
					<div className={cn(styles.recitem, styles.rectexdub)}>
						<span className={styles.desc}>{receipt.purc_date}</span>
						<span className={styles.desc}>{receipt.desc}</span>
					</div>
					<div className={styles.recitem}>
						<span className={styles.price}>{receipt.price} EUR</span>
					</div>
					</>
				{/* )} */}
				<div className={cn(styles.recitem, styles.iconsbut)}>
				{/* {!!removeHandler &&( */}
					<div>
						<button className={styles.icons}>
							<BiTrash className='text-lg text-red-700'/>
						</button>
					</div>
				 {/* )} 
				{isUpdateLink && ( */}
					<div>
						<button className={styles.icons} onClick={()=> push(`/doc/edit/${receipt.id}`)}>
							<BiEdit className='text-lg text-blue-600'/>
						</button> 
					</div>
				{/* )}  */}
					
					<div>
						<button className={styles.icons} onClick={() => setShowModal(true)}>
							<FaSearchPlus className='text-lg text-blue-600'/>
						</button> 
					</div>
					<Modwind isOpen={showModal} onClose={() => setShowModal(false)} item={item} receipt={receipt} />
				 
			 	</div>
			 </div>

		);
	};

	export default ReceiptItem;