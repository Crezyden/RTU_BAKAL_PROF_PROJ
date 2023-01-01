import React from 'react';
import { useState } from "react";
import styled from '../../styles/Components.module.scss'
import classNames from 'classnames';
import { Route } from '@mui/icons-material';
import Menutype from '../../../component/setting/menutype';
const items = [
	{name: 'My seting', path:'seting'},
	{name: 'My setingS'}
]
const set = () => {
	return (
		<div className='container'>
				<Menutype/>
					
		</div>
		// </div>
	);
};

export default set;