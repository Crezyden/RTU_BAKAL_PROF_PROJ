import React, { FC, useState } from 'react';
import styles from './Uploadfile.module.scss'
import { HiUpload } from 'react-icons/hi'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import { useOutside } from '../../../../hooks/useOutside';
import Link from 'next/link';


const Uploadfile: FC = () => {
	const [hidden, setHidden] = useState(true)
	return (
		<div className={styles.wrapper}>
			<button className={styles.button} onClick={() => setHidden(prev => !prev)}>
				<HiUpload />
			</button>
			<div className={styles.profilemenu} hidden={hidden}>
				<ul>
					<li>
						<Link href={`/profile/upload/document`}>
							<a>New document</a>
						</Link>
					</li>
					<li>
						<Link href={`/profile/upload/album`}>
							<a>New album</a>
						</Link>
						<Link href={`/profile/upload/tag`}>
							<a>New tag</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Uploadfile;