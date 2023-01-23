
import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.scss'
// import styles from './Header.module.scss'
import Menu from './menu/Menu';
import { menu } from './menu/menu.data';
import { useAuth } from '../../../hooks/useAuth';
import ProfileMenu from './profile-menu/ProfileMenu';
import UploadFile from './uploadfile/Uploadfile';
const Headeradmin: FC = () => {
	//TODO: GET PROFILE
	const {user} = useAuth()
	console.log(user)
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headernav}>
					<Link href='/'>
						<a className={styles.logo}>DocDig</a>
					</Link>
					 {/* { user ?( <>  */}
					<div className={styles.authmenu}>
						<div className={styles.left}>
						<Menu items={menu}/>
						</div>
						<div className={styles.right}>
						<ProfileMenu/>
						<UploadFile/>
						</div>
					</div>	
					{/* </>):(<div>No</div>)} */}
				</div>				
			</div> 
		</header>
	);
};

export default Headeradmin;