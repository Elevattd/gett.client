import { createSlice } from '@reduxjs/toolkit';
import { ITaskSliceState } from '../../../app/constants/interfaces.interfaces';
import { createTask, updateTask, deleteTask, fetchTasks, getTaskAction } from './taskReducer';

export const initialState: ITaskSliceState = {
	value: [],
	visibleTasks: [],
	status: '',
};

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: { postTask: createTask, putTask: updateTask, delTask: deleteTask, getTasks: getTaskAction },
	extraReducers: (builder) => {
		builder
			.addCase(fetchTasks.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.value = action.payload;
			})
			.addCase(fetchTasks.rejected, (state, action) => {
				state.status = 'failed';
				// state.error = action.error.message;
			});
	},
});

export const { postTask, putTask, delTask, getTasks } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
