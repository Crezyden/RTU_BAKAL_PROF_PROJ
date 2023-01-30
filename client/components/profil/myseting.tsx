import React from 'react';
import classNames from 'classnames';
import styled from './../../styles/Components.module.scss';
// import UseLayout from './layouts/user/UseLayout';
// import Menutype from '../components/setting/menutype';
import Image from 'next/image';

const usersset =[
	{
		name:'users',
		lastname:'Userss',
		email:'users@users.lv',
		password: 'fndbfvfnb',
		img: '/../public/usersimg.png',
		phone:'+3712999202'  
	}
] 
const Myset = () => {
	return (
		// <UseLayout>
			<div className='container'>
				<div className={styled.profil}>
					{/* <Menutype/> */}
					<div className={styled.profilcontent}>
						<div className={styled.profilcontentheader}>
							<h2>My profils</h2>
						</div>	
						<div className={styled.profilcontentinfo}>
							{/* <h2>My profils</h2> */}
							<form>
								{/* <Image 	src='/../public/usersimg.png' width={100} height={100} */}
								{/* /> */}
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
											<strong> {usersset.email}</strong>
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
								</table>
								)}
							</form> 
						</div>

					</div>
				</div>	
			</div>
		// {/* </UseLayout> */}
	);
};

export default Myset;