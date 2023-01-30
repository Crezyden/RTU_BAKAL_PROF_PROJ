import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';
import styles from '../components/ui/receipt-item/ReceipItem.module.scss'
import Filter from '../components/ui/filter/Filter';
import Content from '../components/content';
import Header from '../components/header';
import { useAppContext } from '../contexts/appContext';
import { BiEdit, BiTrash, BiSearch } from 'react-icons/bi'
import Modal from '../components/ui/modal';
import { ModalState } from '../types/modal';
import { TReceipt } from '../types/receipt';
import request from '../utils/request';
const UserHome = () => {
	const [modal, setModal] = useState<ModalState>({ hidden: true }),
		[receipts, setReceipts] = useState([])
	const { state, dispatch } = useAppContext()
	const openModal = (type: string, id: string) => {
		setModal({ hidden: false, type, currentReceipt: id })
	}
	const editDocument = async (receipt: TReceipt) => {
		const data = await request('POST', 'receipt', { receipt })
		if (!data?.message) {
			console.log('Эдитю')
			setReceipts((prev: any) => prev.map((e: any) => ({ ...prev, ...(e._id === receipt._id && receipt) })))
			setModal({ hidden: true })
		}
	}
	const deleteDocument = async (id: string) => {
		const data = await request('DELETE', `receipt/${id}`)
		if (!data?.message) {
			console.log('Удаляю')
			setReceipts(prev => prev.filter((e: any) => e?._id !== id))
		}

	}
	const getHeaders = () => {
		let myData = localStorage.myData
		if (!myData) return false
		let { accessToken } = JSON.parse(myData)
		if (!accessToken) return false
		return {
			Authorization: ` Bearer ${accessToken}`
		}
	}
	useEffect(() => {
		async function getDocuments() {
			const data = await request('GET', 'receipt')
			if (!data?.message) {
				setReceipts(data)
			}
		}
		getDocuments()
	}, [])
	const ReceiptList = ({ receipts }) => {
		return (
			receipts.map((e, key) =>
				<div className={styles.receipt} key={key}>
					<>
						<div className={`${styles.recitem} ${styles.rectexdub}`}>
							<span className={styles.name}>{e.name}</span>
							<span className={styles.shop}>{e.shop_name}</span>
						</div>
						<div className={`${styles.recitem} ${styles.rectexdub}`}>
							<span className={styles.desc}>{e.purc_date}</span>
							<span className={styles.desc}>{e.desc}</span>
						</div>
						<div className={styles.recitem}>
							<span className={styles.price}>{e.price} EUR</span>
						</div>
					</>
					<div className={`${styles.recitem} ${styles.iconsbut}`}>
						<div>
							<button className={styles.icons} onClick={() => deleteDocument(e._id)}>
								<BiTrash className='text-lg text-red-700' />
							</button>
						</div>
						<div>
							<button className={styles.icons} onClick={() => openModal('edit', e._id)}>
								<BiEdit className='text-lg text-blue-600' />
							</button>
						</div>
						<div>
							<button className={styles.icons} onClick={() => openModal('read', e._id)}>
								<BiSearch className='text-lg text-blue-600' />
							</button>
						</div>
					</div>
				</div>
			)
		);
	}
	return (
		<Layout title='Users profile'>
			<Header state={state} />
			<Content>
				<div className='container'>
					<h1 className={styles.h1}>YOUR DOCUMENTS</h1>
					<div className={styles.grid}>
						<div className={styles.card}>
							<div className={styles.grid}>
								{receipts.length
									? <div className={styles.cardlist}>
										<div className={styles.cardleft}>
											<ReceiptList receipts={receipts} />
										</div>
										<div className={styles.cardright}>
											<Filter />
										</div>
									</div>
									: <p>You don't have any documents</p>}
							</div>
						</div>
					</div>
				</div>
			</Content>
			<Modal
				receipt={receipts.find((e: any) => e?._id === modal.currentReceipt) || {}}
				isOpen={!modal.hidden}
				onClose={() => setModal(prev => ({ ...prev, hidden: true }))}
				disabled={modal.type === 'read'}
				onEdit={editDocument}
			/>
		</Layout>
	);
};

export default UserHome;