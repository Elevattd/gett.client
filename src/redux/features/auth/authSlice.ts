import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
	userId: '',
	password: '',
	mail: '',
	permissions: [],
};

export const authSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
});

export const authReducer = authSlice.reducer;
