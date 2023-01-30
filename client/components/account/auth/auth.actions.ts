import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react';
import { IAuthDate } from '../../../services/auth/auth.helper';
import { IAuthFields } from '../../auth-form/auth-form.interfase';
import { toastError } from '../../../utils/api.utils';
import { AuthService } from '../../../services/auth/auth.service';
import { toastr } from 'react-redux-toastr';

export const register = createAsyncThunk<IAuthDate, IAuthFields>(
	`auth/register`, async ({email,password}, thunkApi) =>{
		try {
			const response =await AuthService.register(email,password)
			toastr.success('Ŗegistr','success')
			return response
		} catch (e) {
			toastError(e) 
			return thunkApi.rejectWithValue(e)
		}
	}
)
export const login = createAsyncThunk<IAuthDate, IAuthFields>(
	`auth/login`, async ({email,password}, thunkApi) =>{
		try {
			const response =await AuthService.login(email,password)
			toastr.success('Login','success')
			return response
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
	)
	
export const logout = createAsyncThunk('auth/logout', async () => {
	return {}
})
