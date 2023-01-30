import { isRejectedWithValue } from "@reduxjs/toolkit";
import { Middleware, MiddlewareAPI} from "redux";
import { toastError } from "../../../../../deniss/RTU_BAKAL_PROF_PROJ/client/app/utils/api.utils";
// import { Middleware } from "next/dist/lib/load-custom-routes";
// import { toastError } from './../../../utils/api.utils';

export const rtkQueryErrorLogger: Middleware=
	(api: MiddlewareAPI) => next => action =>{
		if(isRejectedWithValue(action)){
			toastError(action.error, 'RTK error')

		}
		return next(action)
	}
