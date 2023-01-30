import { Card, Grid, TextField } from '@mui/material';
import React, { useRef } from 'react';
import { FC } from 'react';
// import Button from '../../../../ui/button/normal/ButtonStatik';
import styles from './Adddoc.module.scss';
// import {Card, Grid} from'@material-ui/core'
// import StepWrapper from './../../../StepWrapper';
import Button from '../../../ui/button/normal/ButtonStatik';
import { useState } from 'react';
import UploadFile from './UploadFile';
import StepWrapper from '../../../ui/step-wrapper';
import Layout from '../../../layout';
import Header from '../..';
import { useAppContext } from '../../../../contexts/appContext';
import Content from '../../../content';
// import request from '../../../../utils/request';
import getHeaders from '../../../../utils/bearer'
import { useRouter } from 'next/router';
const Adddocum: FC = () => {
	const router = useRouter()
	const nameRef = useRef<any>(),
		shopNameRef = useRef<any>(),
		cityRef = useRef<any>(),
		priceRef = useRef<any>(),
		dateRef = useRef<any>()
	const [doc, setDoc] = useState<any>()
	const { state, dispatch } = useAppContext()
	const [activeStep, setActiveStep] = useState(0)
	const next = () => {
		if (activeStep !== 1) {
			setActiveStep(prev => prev + 1)
		}
	}
	const setDocument = e => {
		setDoc(e.target.files[0])
	}
	const back = () => {
		setActiveStep(prev => prev - 1)
	}
	const uploadDocument = async () => {
		const bearer = getHeaders()
		const name = nameRef.current?.value.trim(),
			shop_name = shopNameRef.current?.value.trim(),
			price = +priceRef.current?.value.trim(),
			purc_date = dateRef.current?.value.trim()
		const formData = new FormData()
		formData.append('name', name)
		formData.append('shop_name', shop_name)
		formData.append('price', `${price}`)
		formData.append('purc_date', purc_date)
		formData.append('recfile', doc)
		const headers = {
			...bearer,
		}
		const res = await fetch(`${process.env.API_URL}/api/receipt`, {
			method: 'POST',
			headers,
			body: formData
		}),
			data = await res.json()
		router.push('/userhome')
	}
	/* const _uploadDocument = async () => {
		const name = nameRef.current?.value.trim(),
			shop_name = shopNameRef.current?.value.trim(),
			price = +priceRef.current?.value.trim(),
			purc_date = dateRef.current?.value.trim(),
			recfile = doc
		if (!name || !shop_name || !price || !purc_date || !recfile) {
			return console.log('Не ахуел оставлять пустые строчки???', recfile, name, shop_name, price, purc_date)
		}
		const data = await request('POST', 'receipt', { name, shop_name, price, purc_date, recfile })
		if (!data?.message) {
			console.log('Zaebisj', data)
		}
	} */
	return (
		<Layout title='Add document'>
			<Header state={state} />
			<Content>
				<h1 className={styles.h1}>Add document</h1>
				<StepWrapper activeStep={activeStep}>
					<Grid container direction={'column'} style={{ padding: 20 }} hidden={activeStep !== 0}>
						<TextField label={"Document name"} inputRef={nameRef} />
						<TextField label={"Shop name"} inputRef={shopNameRef} />
						<TextField label={"City"} inputRef={cityRef} />
						<TextField label={"Price"} inputRef={priceRef} />
						<TextField type='date' inputRef={dateRef} />
					</Grid>
					<Grid container direction={'column'} style={{ padding: 20 }} hidden={activeStep !== 1}>
						<UploadFile file='' setFile={setDocument} accept='document/*'>
							<Button>
								Upload document file
							</Button>
						</UploadFile>,
					</Grid>
				</StepWrapper>
				<div className={styles.nextback}>
					<Button disabled={activeStep === 0} onClick={back}>Back</Button>
					{activeStep < 1
						? <Button onClick={next}>Next</Button>
						: <Button onClick={uploadDocument}>Upload</Button>
					}

				</div>
			</Content>
		</Layout>
	);
};

export default Adddocum;