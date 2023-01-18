export interface IAuthDate {
	user:{
		id: string
		email: string
		// name: string
	} | null 
	accesToken: string
}
