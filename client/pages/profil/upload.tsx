import React from 'react';
import Adddocum from '../../app/component/layout/headrer/uploadfile/adddocument/Adddocum';
import Layout from './../../app/component/layout/Layout';

const Upload = () => {
	return (
		<Layout title='Add news document' >
			<div className='container'>
				<Adddocum/>
			</div>
		</Layout>
	);
};

export default Upload;