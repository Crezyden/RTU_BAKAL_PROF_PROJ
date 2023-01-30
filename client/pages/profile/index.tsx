import React from 'react';
import Layout from '../../components/layout';
import { NextPage } from 'next';
import { IProfil } from '../../components/profile/profile.interface';
import MyProfile from '../../components/profile';
import { useAppContext } from '../../contexts/appContext';
import Header from '../../components/header';
import Content from '../../components/content';

const Profile: NextPage = () => {
    const { state, dispatch } = useAppContext()
    const setMyData = data => {
        dispatch({
            type: ['SET_MY_DATA'],
            value: [{ ...state, ...data }]
        })
    }
    return (
        <Layout title='Profile'>
            <Header state={state} />
            <Content>
                <div className="container">
                    <MyProfile myData={state} setMyData={setMyData} />
                    {/* <Profil profil={{ name: '' }} /> */}
                </div>
            </Content>
        </Layout>
    );
};

export default Profile;