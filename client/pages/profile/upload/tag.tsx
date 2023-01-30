import React from 'react';
// import Adddocum from '../../components/layout/headrer/uploadfile/adddocument/Adddocum';
import Adddocum from '../../../components/header/uploadfile/adddocument/Adddocum';
import Layout from '../../../components/layout';

const Tag = () => {
    return (
        <Layout title='Add new tag' >
            <div className='container'>
                <Adddocum />
            </div>
        </Layout>
    );
};

export default Tag;