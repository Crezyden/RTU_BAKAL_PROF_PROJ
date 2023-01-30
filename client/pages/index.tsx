import { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppContext } from '../contexts/appContext';
// import Home from '../components/home/Home';
import Login from './login';
const HomePage: NextPage = () => {
    const { state, dispatch } = useAppContext(),
        [isLogged, setIsLogged] = useState(false),
        [canShow, setCanShow] = useState(false),
        router = useRouter()
    useEffect(() => {
        let myData = localStorage.getItem('myData')
        if (myData) {
            myData = JSON.parse(myData)
            dispatch({
                type: ['SET_MY_DATA'],
                value: [myData]
            })
            setIsLogged(true)
            setCanShow(true)
            router.push('/userhome')
        } else {
            setCanShow(true)
        }
    }, [])
    return (canShow && !isLogged) ? <Login /> : <></>
    // return <Login />
}
export default HomePage