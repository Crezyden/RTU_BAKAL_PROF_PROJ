import React, { FC } from 'react';
import { IProfil } from './profil.interface';
import styled from './Profil.module.scss'
import Image from 'next/image';
import Menutype from './menutype';
import Button from './../../ui/button/normal/ButtonStatik';
import Layout from '../../layout/Layout';
// import Layout from './../../../../src/layouts/Layouts';
const usersset =[
	{
		name:'users',
		lastname:'Userss',
		email:'users@users.lv',
		password: '*********',
		img: '/user/icon.png',
		phone:'+3712999202',
		city: 'Rīga'  
	}
] 
const Profil:FC<IProfil> = () => {
	return (
		<>
			{/* <Headeradmin/> */}
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
								{usersset.map(usersset =>
								<table>
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Email</td>
										<td>
											<strong> {usersset.email}</strong>
										</td>
									</tr>
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Password</td>
										<td>
											<input type="password" placeholder={usersset.password}/>
											{/* <strong> </strong> */}
										</td>
									</tr>
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Firstname</td>
										<td>
											<strong> {usersset.name}</strong>
										</td>
									</tr>
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Lastname</td>
										<td>
											<strong> {usersset.lastname}</strong>
										</td>	
									</tr>
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Phone</td>
										<td>
											<strong> {usersset.phone}</strong>
										</td>	
									</tr>	
									<tr className={styled.profiluserdata}> 
										<td className={styled.profiluserdatatitle}>Phone</td>
										<td>
											<strong> {usersset.city}</strong>
										</td>	
									</tr>
								</table>
								)}
							</form>
							<Button >Update</Button> 
						</div>

					</div>
				</div>
		</>
	);
};

export default Profil;