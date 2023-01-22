import dynamic from "next/dynamic";
import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useMemo, useState } from "react";
import { TypeComponentAuthFields } from "./private-route.interface";
// import { AuthContext } from './../content/AuthContent';

const DynamicCheckRole = dynamic(()=> import('./CheckRole'),{
	ssr: false

})
 

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>>=({Component:{isOnlyUser},children})=>{
	return  !isOnlyUser ? <>{children}</> : <DynamicCheckRole Component={{isOnlyUser}}>[children]</DynamicCheckRole> 
	// }
	

			}
export default AuthProvider