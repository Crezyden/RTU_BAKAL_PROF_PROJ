import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../app/component/pages/home/Home';
// import { useAuth } from '../app/hooks/useContent';
// import { useAuth } from '../app/hooks/useAuth';
import { useContext } from 'react';
import { AuthContex } from './../app/hooks/useContent';

// const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage =()=>{
	// const {isAuth} = useContext(AuthContex)
    return(<>
    <Home/>
    {/* {isAuth && ,(<>
        OK!</>)} */}
    </>

    )
}

export default HomePage