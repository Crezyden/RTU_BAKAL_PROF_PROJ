import React from 'react';
import Headeradmin from '../../app/component/layout/headrer/Headeradmin';
import Adddocum from '../../app/component/layout/headrer/uploadfile/adddocument/Adddocum';
import Layout from './../../app/component/layout/Layout';

const Upload = () => {
	return (
		<Layout title='Add news document' >
			<Headeradmin/>
			<div className='container'>
				<Adddocum/>
			</div>
		</Layout>
	);
};

export default Upload;