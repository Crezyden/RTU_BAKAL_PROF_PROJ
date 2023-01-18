import { FC } from "react";
import { IMenuItem } from "./menu.interface";
import { useAuth } from './../../../../hooks/useAuth';
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../Header.module.scss'

const MenuItem: FC<{item: IMenuItem}> = ({item})=>{
	const {user} = useAuth()
	const {asPath} = useRouter()

	if(item.link == 'Add')
		if(!user) return null
		else item.link = `/account/${user?.email}` 
	
	return(
		<li className={styles.navmenubutton}>
			<Link href={item.link}>
				<a className={asPath == item.link ? styles.active : ''}>
					<b>{item.title}</b>
				</a>
			</Link>
		</li>
	) 
}
export default MenuItem