import { createSlice } from '@reduxjs/toolkit';
import { createTask, updateTask, deleteTask } from './taskReducer';
import { ITask } from '../../../interface/Task';

export interface ITaskSliceState {
	value: ITask[];
	status: any;
}

const initialState: ITaskSliceState = {
	value: [
		{ userId: 1, id: 1, title: 'delectus aut autem', completed: false },
		{
			userId: 2,
			id: 40,
			title: 'totam atque quo nesciunt',
			completed: true,
		},
		{
			userId: 3,
			id: 41,
			title: 'aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit',
			completed: false,
		},
		{
			userId: 3,
			id: 42,
			title: 'rerum perferendis error quia ut eveniet',
			completed: false,
		},
	],
	status: '',
};

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: { postTask: createTask, putTask: updateTask, delTask: deleteTask },
});

export const { postTask, putTask, delTask } = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;
