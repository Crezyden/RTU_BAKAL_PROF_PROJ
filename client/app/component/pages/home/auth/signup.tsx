import React, { FC, SyntheticEvent } from 'react';
import {useState} from 'react';
import styled from '../../../../styles/Create.module.scss'
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const registracija: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const router = useRouter();
	const submit = async(e: SyntheticEvent) =>{
		e.preventDefault(); 
		await fetch('./api/register', {
			method: "POST",
			headers: {'Content-Type': 'aplication/json'},
			body: JSON.stringify({
				email,
				password
			})
		})
		await router.push('/');
	}

	return (
		<div className={styled.authform}>	
			<div className={styled.wrapper}>
			<div className={styled.titletext}>
					<div className={classNames(styled.title,styled.login)}>Signup</div>
				</div>
				<div className={styled.formcontainer}>
					<div className={styled.forminner}>
						<form className={styled.login} onSubmit={submit}>
							<div className={styled.field}>
							<input type="text" placeholder="Name" required  onChange={e=>setEmail(e.target.value)}/>
							</div>
							<div className={styled.field}>
							<input type="text" placeholder="Email Address" required  onChange={e=>setEmail(e.target.value)}/>
							</div>
							<div className={styled.field}>
							<input type="password" placeholder="Password" required 
							onChange={e=>setPassword(e.target.value)}/>
							</div>
							{/* <div className={styled.field}>
							<input type="password" placeholder="Confirm password" required />
							</div> */}
							<div className={classNames(styled.field,styled.btn)}>
								<div className={styled.btnlayer} />
									<input type="submit" value="Signup"/>
							</div>
							<div className={styled.signuplink}>Not a member? <Link href="/"><a>Log in</a></Link></div>
						
						</form>
					</div>
				</div>
			</div>
		</div>			
			);
};

export default registracija