import React, { FC } from 'react';
import classNames from 'classnames';
import { useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
// import FormLogin from '../component/FormLogin';
import styled from '../../../../styles/Create.module.scss'
import jwt from 'jsonwebtoken'

const LoginForm: FC = () => {
	const router = useRouter()
	const [precentBar, setPrecentBar] = useState('');
	const [passInputChange, setPassInputChange] = useState('');
	const [passInputClasses, setPassInputClasses] =
		useState('pass-input-passive');
	const [toggleIcon, setToggleIcon] = useState('☠️');
	const [toggleIconClasses, setToggleIconClasses] = useState(
		'toggle-icon-passive'
	);
	const [ripple, setRipple] = useState('');
	const [passLabel, setPassLabel] = useState('Strength');
	const [type, setType] = useState('password');
	
	const [email, setEmail] = useState  <string>('')
	const [password, setPassword] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	// const {login,handleSubmit} = useForm();
	async function submit() {
		   const res = await fetch('./api/login',{
			  method: 'POST',
			  // headers: {'Content-Type': 'aplication/json'},
			  body: JSON.stringify({
		  email, 
		  password
		})
		  }).then((t) => t.json())
	  const token = res.token
	  if(token){
		const json = jwt.decode(token) as {[key:string]:string}
		console.log(json) 
		router.push('./user/index')
	 } else{
		setMessage('Error')
	 }};
	 const addClass = (className) => {
	  setPrecentBar('');
	  if (className) {
		  setPrecentBar(className);
	  }
  };
	 const handlePassInput = (e) => {
	  setPassInputChange(e.target.value);
	  if (passInputChange.length === 0) {
		  setPassLabel('Strength');
		  addClass('');
	  } else if (passInputChange.length <= 4) {
		  setPassLabel('Weak');
		  addClass('weak');
	  } else if (passInputChange.length <= 7) {
		  setPassLabel('Not Bad');
		  addClass('average');
	  } else {
		  setPassLabel('Strong');
		  addClass('strong');
	  }
  };
	 const togglePassInput = (e) => {
	  if (type === 'password') {
		  setType('text');
		  setToggleIcon('💀');
		  setRipple('ripple-active');
		  setPassInputClasses('pass-input-active');
		  setToggleIconClasses('toggle-icon-active');
	  } else {
		  setType('password');
		  setToggleIcon('☠️');
		  setRipple('ripple-passive');
		  setPassInputClasses('pass-input-passive');
		  setToggleIconClasses('toggle-icon-passive');
	  }
	}
  
	return (
		<div>

			<div className={styled.authform}>	
			<div className={styled.wrapper}>
				<div className={styled.titletext}>
					<div className={classNames(styled.title,styled.login)}>Login Form</div>
					<div className={classNames(styled.title,styled.signup)}>Signup Form</div>
				</div>
				<div className={styled.message}>*Incorrect email or password</div>
				<div className={styled.formcontainer}>
					<div className={styled.forminner}>
						<form className={styled.login} onSubmit={submit}>
							<div className={styled.inputgroup}>
							<input type="text" name="username" placeholder="Email Address" required 
								onChange={e=>setEmail(e.target.value)}/>
												</div>
									<div className={styled.inputgroup}>
										<input
											type={type}
											className={styled.passInputClasses}
											placeholder='Enter your password'
											value={passInputChange}
											onChange={e=>setPassword(e.target.value)}
										/>
                    <span className={styled.ripple}></span>
                </div>
							<div className={styled.passlink}><a href="#">Forgot password?</a></div>
							<div className={classNames(styled.field,styled.btn)}>
							<div className={styled.btnlayer} />
								<input type="submit" value="Login"/>
									{/* <input type="submit" value="Signup">h</input> */}
							</div>
							<div className={styled.signuplink}>Not a member? <Link href="./signup"><a>Signup now</a></Link></div>
						</form>
            <h1>{message}</h1>
					</div>
				</div>
			</div>
		</div>	
		</div>
	);
};

export default LoginForm;