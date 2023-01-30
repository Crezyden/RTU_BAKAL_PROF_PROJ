
import Link from 'next/link';
import { FC, useState } from 'react';
import { InitialState } from '../../contexts/appContext';
import styles from './Header.module.scss'
import Menu from './menu/Menu';
import { menu } from './menu/menu.data';
import ProfileMenu from './profile-menu/ProfileMenu';
import UploadFile from './uploadfile/Uploadfile';
const Header: FC<{ state?: InitialState }> = ({ state }) => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headernav}>
                    <Link href='/userhome'>
                        <a className={styles.logo}>DocDig</a>
                    </Link>
                    {state?.accessToken ? (
                        <div className={styles.authmenu}>
                            <div className={styles.right}>
                                <ProfileMenu name={state.name} />
                                <UploadFile />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </header>
    );
};

export default Header;