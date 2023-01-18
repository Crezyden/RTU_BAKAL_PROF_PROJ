 import { createSlice } from "@reduxjs/toolkit";
import { IAuthInitialState } from './auth.interface';
import { login, register, logout } from './auth.actions';

const initialState:IAuthInitialState={
	user: null,
	accesToken: '',
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
			state.user = payload.user 
			state.accesToken = payload.accesToken
		}).addCase(register.rejected, state => {
			state.isLoading = false
			state.user = null
			state.accesToken = ''			
		}).addCase(login.pending, state => {
			state.isLoading =true
		}).addCase(login.fulfilled, ( state, {payload}) => {
			state.isLoading = false
			state.user = payload.user 
			state.accesToken = payload.accesToken
		}).addCase(login.rejected, state => {
			state.isLoading = false
			state.user = null
			state.accesToken = ''			
		}).addCase(logout.rejected, state => {
			state.isLoading = false
			state.user = null
			state.accesToken = ''			
		})		
	}
})