import React from 'react';
import { useRef } from 'react';
interface FileUploud{
	file: any;
	setFile: Function;
	accept: string;
	children
}
const UploadFile: React.FC<FileUploud> = ({file, setFile, accept, children}) => {
	const ref = useRef<HTMLInputElement>()	
	const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
		console.log(e.target.files)
	}

	return (
		<div onClick={()=> ref.current?.click()}>
			<input type="file" accept={accept} style={{display:'none'}} ref={ref} onChange={onChange} />
			{children}	
		</div>
	);
};

export default UploadFile;