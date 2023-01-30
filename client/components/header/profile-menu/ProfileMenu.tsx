import Image from 'next/image'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import React, { FC, useState } from 'react';
import styles from './Profile.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
const ProfileMenu: FC<{name: string}> = ({name}) => {
	const route = useRouter()
	const logOut = () => {
		localStorage.clear()
		route.push('/login')
	}
	const [hidden, setHidden] = useState(true)
	return (
		<div className={styles.wrapper}>
			<button onClick={() => setHidden(prev => !prev)}>
				<Image src='/user/icon.png' alt='avatar' width={40} height={40} />
				<span className={styles.name}>{name}</span>
				{hidden ? <GoChevronDown /> : <GoChevronUp />}
			</button>
			<div className={styles.profilemenu} hidden={hidden}>
				<ul>
					<li>
						<Link href={`/profile`}>
							<a> Profile</a>
						</Link>
					</li>
					<li>
						<button onClick={logOut}>Logout</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfileMenu;