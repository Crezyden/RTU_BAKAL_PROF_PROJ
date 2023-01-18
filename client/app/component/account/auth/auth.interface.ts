import { IAuthDate } from './../../../services/auth/auth.helper';

export interface IAuthInitialState extends IAuthDate{
	isLoading: boolean
}
