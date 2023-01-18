import React, { FC } from 'react';
import AuthForm from '../../auth-form/AuthForm';
// import Login from '../../../../pages/login';
import Layout from '../../layout/Layout';
import Login from './auth/login';

const Home:FC = () => {

	return ( 
		<Layout title='Welcome to system'>
			<AuthForm/>
			{/* <Login/> */}
		</Layout>
	);
};
export default Home;