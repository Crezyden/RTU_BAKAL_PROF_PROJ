import {useState} from 'react';
import styled from '../styles/Create.module.scss'
import classNames from 'classnames';
import { useRouter } from 'next/router';

const Formlogin = () => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	async function submitform() {
		const res = await fetch('../../api/login',{
			method: 'POST',
			body: JSON.stringify({username, password})
		}).then((t) => t.json())

		const token = res.token 

		if(token){

		}
	}
	return (
		<div className={styled.authform}>	
			<div className={styled.wrapper}>
				<div className={styled.titletext}>
					<div className={classNames(styled.title,styled.login)}>Login Form</div>
					<div className={classNames(styled.title,styled.signup)}>Signup Form</div>
				</div>
				<div className={styled.formcontainer}>
					<div className={styled.forminner}>
						<form className={styled.login}>
							<div className={styled.field}>
							<input type="text" name="username" value={username} placeholder="Email Address" required />
							</div>
							<div className={styled.field}>
							<input type="password"  name="password" value={password} placeholder="Password" required />
							</div>
							<div className={styled.passlink}><a href="#">Forgot password?</a></div>
							<div className={classNames(styled.field,styled.btn)}>
							<div className={styled.btnlayer} />
								<input type="submit" value="Login" onChange={submitform} />
									{/* <input type="submit" value="Signup">h</input> */}
							</div>
							<div className={styled.signuplink}>Not a member? <a href="#">Signup now</a></div>
						</form>
						<form action="#" className={styled.signup}>
							<div className={styled.field}>
							<input type="text" placeholder="Email Address" required />
							</div>
							<div className={styled.field}>
							<input type="password" placeholder="Password" required />
							</div>
							<div className={styled.field}>
							<input type="password" placeholder="Confirm password" required />
							</div>
							<div className={classNames(styled.field,styled.btn)}>
								<div className={styled.btnlayer} />
									<input type="submit" value="Signup"/>
								</div>
						</form>
					</div>
				</div>
			</div>

		</div>			
			);
		};
export default Formlogin;