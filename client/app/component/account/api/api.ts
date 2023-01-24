import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { USER } from '../../../services/user.service';

import { API_URL } from '../../../api/axios';

import { TypeRootState } from '../store';

import { IUser } from './../../../types/user.interface';

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Receipt', 'Profile'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, {getState}) => {
			const token = (getState() as TypeRootState).auth.accessToken
			if(token) headers.set(`Authorization`, `Bearer ${token}`)
			return headers
		}
	}),
	endpoints: builder => ({
		getProfile: builder.query<IUser, any>({
			query: () => `${USER}/profil`,
			providesTags: () =>[{type: 'Profile'}]
		})
	})  
})
// api.useGetProfileQuery
// export const {useGetProfileQuery}=api
