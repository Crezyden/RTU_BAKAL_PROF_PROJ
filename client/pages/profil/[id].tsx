import React from 'react';
import Layout from '../../app/component/layout/Layout';
// import Layout from './../../layouts/Layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { UserService } from '../../app/services/user.service';
import { IUser } from '../../app/types/user.interface';
import { IProfil } from '../../app/component/pages/profil/profil.interface';
import Profil from '../../app/component/pages/profil/Profil';

const Account: NextPage<IProfil> = ({profil}) => {
	return (
		<Layout title='Profil'>
			<div className="container">
				{/* <TabBar>
					<TabBarItem label='Profil'>

					</TabBarItem>
				</TabBar> */}
				<Profil profil={profil}/>
			</div>
		</Layout>
	);
};
// export const getStaticPaths: GetStaticPaths = async () => {
// 	try {
// 		const {data: users} = await UserService.getAll()
// 		const paths = users.map(users=>({
// 			params:{
// 				id: String( users.id)
// 			}
// 		}))
// 		return {
// 			paths, fallback: "blocking"
// 		}
// 	} catch (e) {
// 		return {
// 			paths:[], fallback: false
// 		}
		
// 	}

// }
// export const getStaticProps: GetStaticProps = async ({params}) => {
// 	try {
// 		const {data: profil} = await UserService.getUser(String(params?.id))
// 		return {
// 			props:{
// 				profil
// 			} as IProfil
// 		}
// 	} catch (e) {
// 		return {
// 			props:{
// 				profil:{} as IUser 
// 			} as IProfil
// 		}
		
// 	}

// }

export default Account;