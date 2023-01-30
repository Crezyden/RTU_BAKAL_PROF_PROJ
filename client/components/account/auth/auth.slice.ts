 import { createSlice } from "@reduxjs/toolkit";
import { IAuthInitialState } from './auth.interface';
import { login, register, logout } from './auth.actions';

const initialState:IAuthInitialState={
	users: null,
	accessToken: '',
	isLoading: false
}
export const authSlice = createSlice({
	name:'auth',
	initialState,
	reducers:{},
	extraReducers: builder => {
		builder.addCase(register.pending, state => {
			state.isLoading =true
		}).addCase(register.fulfilled, ( state, {payload}) => {
			state.isLoading = false
			state.users = payload.users 
			state.accessToken = payload.accessToken
		}).addCase(register.rejected, state => {
			state.isLoading = false
			state.users = null
			state.accessToken = ''			
		})
		.addCase(login.pending, state => {
			state.isLoading =true
		}).addCase(login.fulfilled, ( state, {payload}) => {
			state.isLoading = false
			state.users = payload.users 
			state.accessToken = payload.accessToken
		}).addCase(login.rejected, state => {
			state.isLoading = false
			state.users = null
			state.accessToken = ''			
		})
		.addCase(logout.rejected, state => {
			state.isLoading = false
			state.users = null
			state.accessToken = ''			
		})		
	}
})