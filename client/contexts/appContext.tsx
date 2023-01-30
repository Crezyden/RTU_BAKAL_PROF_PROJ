import React, { createContext, useContext, useEffect, useReducer } from 'react'
import AppReducer from './appReducer'

export type InitialState = {
    name: string,
    email: string,
    id: string,
    accessToken: string,
    avatarPath: string,
    phone: string,
    city: string,
}

export interface Dispatch {
    type: string[],
    value?: any[]
}

interface InitContextProps {
    state: InitialState,
    dispatch: React.Dispatch<Dispatch>
}


export const AppContext = createContext({} as InitContextProps)

let initialState: InitialState = {
    name: '',
    email: '',
    id: '',
    accessToken: '',
    avatarPath: '',
    phone: '',
    city: '',
}
export default function AppProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    useEffect(() => {
        const myData = localStorage.myData
        if (myData) {
            dispatch({
                type: ['SET_MY_DATA'],
                value: [JSON.parse(myData)]
            })
        }
    }, [])
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)