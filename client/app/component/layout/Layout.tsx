import Head from 'next/head';
import { Children, FC, PropsWithChildren } from 'react';
import Header from './headrer/Header';
import styled  from './Layout.module.scss';

const Layout: FC<PropsWithChildren<{title:string}>> = ({title , children}) => {
	return <>
	<Head>
		<title>{title}</title>
	</Head>
	<main className={styled.main}>
		<Header/>
		<section className={styled.content}>
			<div className={styled.wrapper}>{children}</div>
		</section> 
	</main>
	</> 
};

export default Layout;