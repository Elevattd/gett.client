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
	const taskFound: ITask | undefined = state.value?.find((task: ITask) => task.id === action.payload);
	if (taskFound) {
		state.value.splice(state.value.indexOf(taskFound), 1);
	}
};
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
	try {
		const { data } = await AxiosInstance.get('todos');
		return data;
	} catch (error) {
		return error;
	}
});
