import React, { FC, SyntheticEvent } from 'react';
import {useState} from 'react';
import styled from '../styles/Create.module.scss'
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Registracija from './../app/component/pages/home/auth/signup';

const signup: FC = () => {
	return (
		<Registracija/>	
		);
};

export default signup