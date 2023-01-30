import React from 'react';
import { useState } from "react";
import styled from './Profile.module.scss'
import classNames from 'classnames';
// import { Route } from 'react-router-dom';
import Pages from '../setting/pages';
import Link from 'next/link';

const items = [
	{ name: 'Profile', path: 'seting', href: '/profile' },
	{ name: 'Tags' , href: '/tags'},
	{ name: 'Albums' , href: '/albums'}
]
const menutype = () => {
	return (
		// <div className='container'>
		<div className={styled.profilemenu}>
			{items.map((items, key) =>
				<li className={styled.profilmenuitems} key={key}>
					<Link href={`${items.href}`}>
						<a className={styled.profilmenulink}>{items.name}</a>
					</Link>
				</li>
			)}
		</div>

	);
};

export default menutype;