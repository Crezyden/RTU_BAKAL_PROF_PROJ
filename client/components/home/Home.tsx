import React, { FC } from 'react';
// import AuthForm from '../components/account/auth-form/AuthForm';
import AuthForm from '../../components/auth-form/AuthForm';
// import Login from '../../../../pages/login';
import Layout from '../layout';
import Login from './auth/login';
// import Header from '../../c /headrer/Header';
import Header from '../layout/headrer/Header';


const Home:FC = () => {

	return ( 
		<Layout title='Welcome to system'>
			{/* <Header/> */}
			<AuthForm/>
			{/* <Login/> */}
		</Layout>
	);
};
export default Home;