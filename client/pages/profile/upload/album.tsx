import React from 'react';
// import Adddocum from '../../components/layout/headrer/uploadfile/adddocument/Adddocum';
import Adddocum from '../../../components/header/uploadfile/adddocument/Adddocum';
import Layout from '../../../components/layout';

const Album = () => {
    return (
        <Layout title='Add new album' >
            <div className='container'>
                <Adddocum />
            </div>
        </Layout>
    );
};

export default Album;