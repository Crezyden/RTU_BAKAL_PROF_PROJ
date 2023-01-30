
import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.scss'
// import styles from './Header.module.scss'
import Menu from './menu/Menu';
import { menu } from './menu/menu.data';
import { useAuth } from '../../../hooks/useAuth';
import ProfileMenu from './profile-menu/ProfileMenu';
import UploadFile from './uploadfile/Uploadfile';
const Header: FC = () => {
	//TODO: GET PROFILE
	const {users} = useAuth()
	console.log(users)
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headernav}>
					<Link href='/'>
						<a className={styles.logo}>DocDig</a>
					</Link>
					 { users ?( <> 
					<div className={styles.authmenu}>
						<div className={styles.left}>
						<Menu items={menu}/>
						</div>
						<div className={styles.right}>
						<ProfileMenu/>
						<UploadFile/>
						</div>
					</div>	 
				</>):(<div></div>)} 
				</div>				
			</div> 
		</header>
	);
};

export default Header;