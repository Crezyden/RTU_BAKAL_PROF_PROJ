import { FC } from "react";
import { IMenuItem } from "./menu.interface";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../Header.module.scss'
import { useAppContext } from "../../../contexts/appContext";

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { state, dispatch } = useAppContext()
	const { asPath } = useRouter()

	return (
		<li className={styles.navmenubutton}>
			{/* <Link href={item.link}>
				<a className={asPath == item.link ? styles.active : ''}>
					<b>{item.title}</b>
				</a>
			</Link> */}
		</li>
	)
}
export default MenuItem