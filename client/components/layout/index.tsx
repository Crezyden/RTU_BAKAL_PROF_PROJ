import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import styled from './Layout.module.scss';
const Layout: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
	return <>
		<Head>
			<title>{title}</title>
		</Head>
		<main className={styled.main}>
			{children}
		</main>
	</>
};

export default Layout;