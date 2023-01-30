import React, { FC } from 'react';
import styled from './Profile.module.scss'
import Image from 'next/image';
import Menutype from './menutype';
import Button from '../ui/button/normal/ButtonStatik';
import { Dispatch, InitialState } from '../../contexts/appContext';
import request from '../../utils/request';
const Profile: FC<{ myData: InitialState, setMyData: any }> = ({ myData, setMyData }) => {
	const fields = ['Name', 'Email', 'Phone', 'City']
	const updateProfile = async () => {
		const { name, email, phone, city } = myData
		const data = await request('POST', 'user/update', { name, email, phone, city })
		if (!data?.message) {
			setMyData({ name, email, phone, city })
			console.log('Апдейтил')
		}
	}
	return (
		<div className={styled.profil}>
			<Menutype />
			<div className={styled.profilcontent}>
				<div className={styled.profilcontentheader}>
					<h2>My profile</h2>
				</div>
				<div className={styled.profilcontentinfo}>
					<Image src='/user/icon.png' width={100} height={100} />
					<div style={{ lineHeight: 3 }}>
						{fields.map((field, key) =>
							<div key={key}>
								<span>{field}:&nbsp;&nbsp;&nbsp;</span>
								<input type="text" name="" id="" placeholder={field} defaultValue={myData[field.toLowerCase()]} onChange={e => myData[field.toLowerCase()] = e.target.value} />
							</div>
						)}
					</div>
					<Button onClick={updateProfile}>Update</Button>
				</div>
			</div>
		</div>
	);
};

export default Profile;