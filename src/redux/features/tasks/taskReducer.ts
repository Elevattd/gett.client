import { Action } from '../../../app/constants/types';
import { AxiosInstance } from '../../../app/services/axiosInstance';
import { ITask, ITaskSliceState } from '../../../app/constants/interfaces.interfaces';
import { CaseReducer, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export const createTask: CaseReducer<ITaskSliceState, PayloadAction<{}>> = (state: ITaskSliceState, action: Action) => {
	const task: ITask = action?.payload;
	state.value.push(task);
};
export const updateTask: CaseReducer<ITaskSliceState, PayloadAction<{}>> = (state: ITaskSliceState, action: Action) => {
	const { id, title, completed }: ITask = action?.payload;
	const taskFound: ITask | undefined = state.value?.find((task: ITask) => task.id === id);
	if (taskFound) {
		taskFound.title = title;
		taskFound.completed = completed;
	}
};

export const deleteTask: CaseReducer<ITaskSliceState, PayloadAction<{}>> = (state: ITaskSliceState, action: Action) => {
	const taskIndex: number = state.value.findIndex((task: ITask) => task.id === action.payload);
	if (taskIndex !== -1) {
		state.value.splice(taskIndex, 1);
		state.visibleTasks.splice(taskIndex, 1);
		if (state.value.length > state.visibleTasks.length) {
			state.visibleTasks.push(state.value[state.visibleTasks.length]);
		}
	}
};

export const getTaskAction: CaseReducer<ITaskSliceState, PayloadAction<{}>> = (
	state: ITaskSliceState,
	action: Action,
) => {
	state.visibleTasks = action.payload;
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
	try {
		const { data } = await AxiosInstance.get('todos');
		return data;
	} catch (error) {
		return error;
	}
});
