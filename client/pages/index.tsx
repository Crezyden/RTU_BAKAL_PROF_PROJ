import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../app/component/pages/home/Home';
import { useAuth } from '../app/hooks/useAuth';

// const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage =()=>{
	const {user} = useAuth()
    return(<>
    <Home/>
    {user?(<>
        OK!</>): null}
    </>
    )
}

export default HomePage