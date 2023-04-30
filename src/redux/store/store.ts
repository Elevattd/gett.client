import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { taskReducer } from '../features/tasks/taskSlice';
import { authReducer } from '../features/auth/authSlice';
import { paginationReducer } from '../features/pagination/paginationSlice';

export const store = configureStore({
	reducer: {
		tasks: taskReducer,
		auth: authReducer,
		pagination: paginationReducer,
	},
});
