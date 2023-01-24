import React, { FC } from 'react';
import { IProfil } from './profil.interface';
import styled from './Profil.module.scss'
import Image from 'next/image';
import Menutype from './menutype';
import Button from './../../ui/button/normal/ButtonStatik';
import Layout from '../../layout/Layout';
import { NextPageAuth } from '../../../providers/private-route.interface';
import { api } from '../../account/api/api';
// import Headeradmin from '../../layout/headrer/Headeradmin';
// import Layout from './../../../../src/layouts/Layouts';
import { useAuth } from './../../../hooks/useAuth';
const Profil:NextPageAuth<IProfil> = () => {
	const {users} = useAuth()
	const {data, isLoading} = api.useGetProfileQuery(null,{
		skip: !users
	})
	if(isLoading) return null

	return (
		
			<div className={styled.profil}>
				<Menutype/>
					<div className={styled.profilcontent}>
						<div className={styled.profilcontentheader}>
							<h2>My profils</h2>
						</div>	
						<div className={styled.profilcontentinfo}>
							{/* <h2>My profils</h2> */}
							<form>
								<Image 	src='/user/icon.png' width={100} height={100}/>
								<table>
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Email</td>
										<td>
											<strong> {data?.email}</strong>
										</td>
									</tr>
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Password</td>
										<td>
											<input type="password" value={data?.password}/>
											{/* <strong> </strong> */}
										</td>
									</tr>
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Firstname</td>
										<td>
											<strong> {data?.name}</strong>
										</td>
									</tr>
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Phone</td>
										<td>
											<strong> {data?.phone}</strong>
										</td>	
									</tr>	
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Phone</td>
										<td>
											<strong> {data?.city}</strong>
										</td>	
									</tr>
								</table>
							</form>
							<Button >Update</Button> 
						</div>

					</div>
				</div>
		
	);
};
Profil.isOnlyUser= true
export default Profil;