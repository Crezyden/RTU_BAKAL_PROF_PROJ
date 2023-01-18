import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Field from '../ui/field/Field';
import { IAuthFields } from './auth-form.interfase';
import styled from './AuthForm.module.scss'
// import styles from './AuthForm.module.scss'
import { validEmail } from './auth.valid';
import classNames from 'classnames';
import Link from 'next/link';
import Button from '../ui/button/Button';
import { useOutside } from '../../hooks/useOutside';
import { useActions } from './../../hooks/useAction';
import { useAuth } from './../../hooks/useAuth';
import  axios  from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AuthForm:FC = () => {
	// const currentAuthTitle = type === 'login' ? 'register': 'login'
	//  useAction
	const [type, setType] = useState<'login' | 'register'>('login')
	
	const {login, register: registerAction} = useActions()

	const {isLoading} = useAuth()
	
	const {register, formState: {errors},  handleSubmit } = useForm<IAuthFields>({
		mode: 'onChange'
	})
	const router = useRouter()

	const onSubmit:SubmitHandler<IAuthFields>=data =>{
		if(type =='login'){
			login(data)
			router.push('/userhome')
			}
		else if(type == 'register') registerAction(data)
	}

	
	return ( 
	<div className={styled.authform}>	
		<div className={styled.wrapper}>
		<div className={styled.titletext}>
				<div className={classNames(styled.title,styled.login)}>Login</div>
			</div>
			<div className={styled.formcontainer}>
				<div className={styled.slidecontrols}>
						<input type="radio" onClick={()=>setType('login')} name="slide" id="login" checked/>
						<input type="radio" name="slide" id="signup"/>
						<label htmlFor="login" className={classNames(styled.slide, styled.login)}>Login</label>
						<label htmlFor="signup" className={classNames(styled.slide, styled.signup)}>Signup</label>
						<div className={styled.slidertab}></div>
           		 </div>				
				<div className={styled.forminner}>
				{/* { type == 'login' &&( */}
					<form className={styled.login} onSubmit={handleSubmit(onSubmit)}>
						<Field 
							{ ...register('email',{
								required: 'Email required',
								pattern:{
									value: validEmail,
									message: 'Not valid email'
								}
							})}
							placeholder='E-mail'
							error ={errors.email}
							/>
						{/* <div className={styled.field}> */}
						<Field 
							{ ...register('password',{
								required: 'password required',
								minLength:{
									value: 6,
									message: 'Min password line 6 symbol'
								}
							})}
							placeholder='Password'
							error ={errors.password}
							type ='password'
							/>						
								<Button onClick={()=>setType('login')} disabled={isLoading}>Login</Button> 		
								<div className={styled.signuplink}>
									Create new account? 
									<Link href='/'> 
										<a>Register</a>
									</Link> 								 									
								</div>	
					</form>
					{/* )
					}: null */}
					</div>
			</div>
		</div>
	</div>
					// <button className={styles.register} onClick={()=>setType('register')}>Register</button>				
			
	);
};

export default AuthForm;