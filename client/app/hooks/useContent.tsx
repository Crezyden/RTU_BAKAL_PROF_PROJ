import { createContext, Dispatch, FC, SetStateAction, useContext, useMemo, useState } from "react"
// import { AuthContext } from './../content/AuthContent';

interface IContext {
		isAuth: boolean
		setIsAuth:Dispatch<SetStateAction<boolean>>
		// children
		// isLoading
		// value
}

export const AuthContex = createContext<IContext>({} as IContext)
export const AuthProvider =({children})=>{
	const [isAuth, setIsAuth] = useState(false)
	const value =useMemo(()=>({
		isAuth, setIsAuth
	}),[isAuth])
	return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>
}
// export const useAuth = useContext(AuthContex)