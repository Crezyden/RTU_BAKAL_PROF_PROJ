import Link from 'next/link';
import React, { FC } from 'react';
import { useOutside } from '../../../hooks/useOutside';
import styles from './Folder.module.scss'
const Folder:FC = () => {
	const {ref, setIsShow, isShow} = useOutside(false)
		return (
			<div ref={ref} className={styles.wrapper}>
				<button className={styles.button} onClick={()=> setIsShow(!isShow)}> 
	
				{isShow}
				</button>
				{isShow &&(
					<div className={styles.profilemenu}>
						<ul>
							<li>
								<Link href={`/profil/upload`}>
									<a> News document</a>
								</Link>
							</li>
							<li>
								<Link href={`/profil/upload`}>
									<a> News alboms</a>
								</Link>
								<Link href={`/profil/account`}>
									<a> News tags </a>
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
	);
)}

export default Folder;