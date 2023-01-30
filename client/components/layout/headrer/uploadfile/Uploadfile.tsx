import React, { FC } from 'react';
import styles from './Uploadfile.module.scss' 
import { HiUpload } from 'react-icons/hi'
import {GoChevronDown, GoChevronUp} from 'react-icons/go'
import { useOutside } from '../../../../hooks/useOutside';
import Link from 'next/link';


const Uploadfile: FC = () => {
	const {ref, setIsShow, isShow} = useOutside(false)
	return (
		<div ref={ref} className={styles.wrapper}>
			<button className={styles.button} onClick={()=> setIsShow(!isShow)}> 
			<HiUpload/>
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
};

export default Uploadfile;