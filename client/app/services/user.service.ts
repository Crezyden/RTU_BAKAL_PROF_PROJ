import axiosClassic from "../api/axios"
import { IUser } from './../types/user.interface';

export const USER = 'user'
export const UserService={
	async getAll(){
		return axiosClassic.get<IUser[]>(`/${USER}`)
	},
	async getUser(id:string){ 
		return axiosClassic.get<IUser>(`http://localhost:3500/api/${USER}/by-id/${id}`)
	}
}