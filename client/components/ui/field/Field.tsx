import React, { FC, forwardRef } from 'react';
import { IField } from './Field.interface';
import styles from'./Field.module.scss'
const Field = forwardRef<HTMLInputElement, IField> (
	({ error, type ='text', style, ...rest},ref)=>{
		return (
			<div className={styles.field} style={style}> 
				{error && <div className={styles.error}>*{error.message}</div>}
				<input ref={ref} type={type} {...rest}/>
			</div>
		);

	}

) 
Field.displayName='Field'
export default Field;