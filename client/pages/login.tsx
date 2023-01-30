import React, { FC, useRef, useState } from 'react';
import Field from '../components/ui/field/Field';
import styled from '../components/auth-form/AuthForm.module.scss'
import classNames from 'classnames';
import Link from 'next/link';
import Button from '../components/ui/button/Button';
import { useAppContext } from '../contexts/appContext';
import { useRouter } from 'next/router'
import Layout from '../components/layout';
import Header from '../components/header';
import Content from '../components/content';
import request from '../utils/request';
const Login: FC = () => {
    const { dispatch } = useAppContext()
    const router = useRouter()
    const emailRef = useRef<any>(),
        passwordRef = useRef<any>()
    const signIn = async () => {
        const email = emailRef.current.value.trim(),
            password = passwordRef.current.value.trim()
        if (!email || !password) {
            return alert(`Введите ${!email ? 'пароль' : 'логин'}!`)
        }
        const data = await request('POST', 'auth/login', { email, password }, false),
            { accessToken, users, message } = data
        if (message) {
            return console.log('error', message)
        }
        users.accessToken = accessToken
        dispatch({
            type: ['SET_MY_DATA'],
            value: [users]
        })
        router.push('/userhome')
    }
    return (
        <Layout title='Login'>
            <Header />
            <Content>
                <div className={styled.authform}>
                    <div className={styled.wrapper}>
                        <div className={styled.titletext}>
                            <div className={classNames(styled.title, styled.login)}>Login</div>
                        </div>
                        <div className={styled.formcontainer}>
                            <div className={styled.slidecontrols}>
                                <Link href='/login'>
                                    <div className={classNames(styled.slide, styled.active)}>Login</div>
                                </Link>
                                <Link href='/signup'>
                                    <div className={classNames(styled.slide)}>Signup</div>
                                </Link>
                            </div>
                            <div className={styled.forminner}>
                                <div className={styled.login}>
                                    <Field placeholder='E-mail' ref={emailRef} />
                                    <Field placeholder='Password' type='password' ref={passwordRef} />
                                    <Button onClick={signIn}>Login</Button>
                                    <div className={styled.signuplink}>
                                        <p>Don't have an account? <Link href='/signup'><a>Sign up</a></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default Login;