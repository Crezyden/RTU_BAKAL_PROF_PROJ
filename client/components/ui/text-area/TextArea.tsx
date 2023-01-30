import React, { FC, forwardRef } from 'react';
import { ITextArea } from './text-area.interface';
import styles from'./Field.module.scss'
const TextArea = forwardRef<HTMLTextAreaElement, ITextArea> (
	({ error, style, ...rest},ref)=>{
		return (
			<div className={styles.input} style={style}> 
				<textarea ref={ref} {...rest}/>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);

	}

) 
TextArea.displayName='TextArea'
export default TextArea;