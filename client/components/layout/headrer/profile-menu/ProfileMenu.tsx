import Image from 'next/image'
import {GoChevronDown, GoChevronUp} from 'react-icons/go'
import React, { FC } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import { useOutside } from '../../../../hooks/useOutside'
import { api } from './../../../account/api/api';
import styles from './Profile.module.scss' 
import Link from 'next/link';
import { useActions } from './../../../../hooks/useAction';
const ProfileMenu: FC = () => {
	const {ref, setIsShow, isShow} = useOutside(false)

	// const {user} = useAuth()
	// const {data, isLoading} = api.useGetProfileQuery(null,{
	// 	skip:!user
	// })

	// if(isLoading) return null
	const {logout} = useActions()
	
	return (
		<div ref={ref} className={styles.wrapper}>
				{/* {data?.email} */}
			<button onClick={()=> setIsShow(!isShow)}>
				<Image src='/user/icon.png' alt='avatar' width={40} height={40} />
				<span className={styles.name}>Users</span>
				{isShow ? <GoChevronUp/> : <GoChevronDown/>}
			</button>
			{isShow &&(
				<div className={styles.profilemenu}>
					<ul>
						<li>
							<Link href={`/profil/account`}>
								<a> Profile</a>
							</Link>
						</li>
						<li>
							<button onClick={logout}>Logout</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default ProfileMenu;