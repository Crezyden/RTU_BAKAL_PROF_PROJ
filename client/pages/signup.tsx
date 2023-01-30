import React, { FC, useRef, useState } from 'react';
import Field from '../components/ui/field/Field';
import styled from '../components/auth-form/AuthForm.module.scss'
import classNames from 'classnames';
import Link from 'next/link';
import Button from '../components/ui/button/Button';
import { useAppContext } from '../contexts/appContext';
import { useRouter } from 'next/router'
import Layout from '../components/layout';
import Content from '../components/content';
import Header from '../components/header';
import request from '../utils/request';
const Login: FC = () => {
    const router = useRouter()
    const emailRef = useRef<any>(),
        passwordRef = useRef<any>(),
        nameRef = useRef<any>(),
        cityRef = useRef<any>(),
        phoneRef = useRef<any>()
    const signUp = async () => {
        try {
            const email = emailRef.current.value.trim(),
                password = passwordRef.current.value.trim(),
                name = nameRef.current.value.trim(),
                city = cityRef.current.value.trim(),
                phone = phoneRef.current.value.trim()
            if (!email || !password || !name || !city || !phone) {
                return alert(`Введите все данные!`) // здесь можно что-то выводить, если не заполнена форма
            }
            const res = await request('POST', 'auth/register', { email, password, name, city, phone }, false)
            if (!res?.message) {
                router.push('/login')
            }
        } catch (e) {
            console.log(e)
        }
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
                                    <div className={classNames(styled.slide)}>Login</div>
                                </Link>
                                <Link href='/signup'>
                                    <div className={classNames(styled.slide, styled.active)}>Signup</div>
                                </Link>
                            </div>
                            <div className={styled.forminner}>
                                <div className={styled.login}>
                                    <Field placeholder='Name' ref={nameRef} />
                                    <Field placeholder='E-mail' ref={emailRef} />
                                    <Field placeholder='Password' type='password' ref={passwordRef} />
                                    <Field placeholder='Phone' ref={phoneRef} />
                                    <Field placeholder='City' ref={cityRef} />
                                    <Button onClick={signUp}>Sign up</Button>
                                    <div className={styled.signuplink}>
                                        <p>Have an account? <Link href='/login'><a>Login</a></Link></p>
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