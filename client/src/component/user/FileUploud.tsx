import React, { useRef } from 'react';
interface FileUploadProps{
	setFile: Function
	accept: string;
}
const FileUploud: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {
	const ref = useRef<HTMLInputElement>();

	const onChange = (e: React.ChangeEvent<HTMLIFrameElement>) => {
		setFile(e.target.files[0]);
		console.log(e.target.files);
	};
	return (
		<div onClick={() => ref.current.click()}>
			<input type='file'
				accept={accept}
				style={{ display: "none" }}
				ref={ref}
				onChange={onChange} >
				</input>

			{children}
		</div>
	);
};

export default FileUploud;