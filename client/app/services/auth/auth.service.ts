import { IAuthDate } from "./auth.helper"
import axiosClassic from "../../api/axios"

const AUTH = 'auth'
export const AuthService={
	async login(email: string, password:string){
		const response = await axiosClassic.post<IAuthDate>(`/${AUTH}/login`,{
			email, password
		})
	return response.data
	},
	
	async register(email: string, password:string){
	const response = await axiosClassic.post<IAuthDate>(`/${AUTH}/register`,{
		 email, password
	})
	return response.data
	}
	
}