import React, { FC, useState } from 'react';
import Field from '../ui/field/Field';
import styled from './AuthForm.module.scss'
import classNames from 'classnames';
import Link from 'next/link';
import Button from '../ui/button/Button';

const Login: FC = () => {
    const signIn = () => {
        console.log('sign in')
    }
    return (
        <div className={styled.authform}>
            <div className={styled.wrapper}>
                <div className={styled.titletext}>
                    <div className={classNames(styled.title, styled.login)}>Login</div>
                </div>
                <div className={styled.formcontainer}>
                    <div className={styled.slidecontrols}>
                        <input type="radio" name="slide" id="login" checked />
                        <input type="radio" name="slide" id="signup" />
                        <label htmlFor="login" className={classNames(styled.slide, styled.login)}>Login</label>
                        <label htmlFor="signup" className={classNames(styled.slide, styled.signup)}>Signup</label>
                    </div>
                    <div className={styled.forminner}>
                        <div className={styled.login}>
                            <Field placeholder='E-mail' />
                            <Field placeholder='Password' type='password' />
                            <Button onClick={signIn}>Login</Button>
                            <div className={styled.signuplink}>
                                <p>Create new account? <a href="#">Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;