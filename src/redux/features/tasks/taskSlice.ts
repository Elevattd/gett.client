import { createSlice } from '@reduxjs/toolkit';
import { ITaskSliceState } from '../../../app/constants/interfaces.interfaces';
import { createTask, updateTask, deleteTask, fetchTasks } from './taskReducer';

const initialState: ITaskSliceState = {
	value: [],
	status: '',
};

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: { postTask: createTask, putTask: updateTask, delTask: deleteTask },
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

export const { postTask, putTask, delTask } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
