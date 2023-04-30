import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../../app/constants/interfaces.interfaces';
import { logOut, setCredentias } from './authReducer';

const initialState: IUser = {
	username: null,
	password: null,
	permissions: [],
	autenticate: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: setCredentias,
		logout: logOut,
	},
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
