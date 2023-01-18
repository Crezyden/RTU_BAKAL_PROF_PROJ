import { FC } from "react";
import { IMenuItem } from "./menu.interface";
import styles from '../Header.module.scss'
import MenuItem from './MenuItem';

interface IMenu{
	// title: string
	items: IMenuItem[]
}
const Menu: FC<IMenu> = ({items}) => {
	return (
		<nav className={styles.navmenu}>
			<ul className={styles.navmenuul}>
				{items.map(menuItem=>(
					<MenuItem item={menuItem} key={menuItem.link}/>
				))}
			</ul>
		</nav>
	)
}
export default Menu