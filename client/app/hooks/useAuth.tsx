import { IAuthDate } from './../services/auth/auth.helper';
import { useTypedSelector } from './useTypedSelector';
import { useContext } from 'react';
// import { AuthContext } from './AuthContent';
import { AuthContex } from './useContent';
export const useAuth = () => useTypedSelector(state => state.auth)
// export const useAuth = useContext(AuthContex)