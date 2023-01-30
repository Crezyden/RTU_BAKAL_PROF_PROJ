import { IAuthDate } from '../../../../../deniss/RTU_BAKAL_PROF_PROJ/client/app/services/auth/auth.helper';

export interface IAuthInitialState extends IAuthDate{
	isLoading: boolean
}
