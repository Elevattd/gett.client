import { ITask } from '../../../interface/Task';
import { Action } from '../../../app/constants/types';
import { ITaskSliceState } from './taskSlice';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

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
