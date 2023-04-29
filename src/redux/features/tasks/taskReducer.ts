import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

type State = any;

type Action = {
	payload: {};
	type: string;
};
export const createTask: CaseReducer<State, PayloadAction<{}>> = (state: any, action: Action) => {
	state.value.push(action?.payload);
};
export const updateTask: CaseReducer<State, PayloadAction<{}>> = (state, action: Action) => {
	state.push(action?.payload);
};

export const deleteTask: CaseReducer<State, PayloadAction<{}>> = (state, action: Action) => {
	const tasks: [] = state.value;
	const taskFound = tasks?.find((task: any) => {
		return task.id === action.payload;
	});
	if (taskFound) {
		state.value.splice(state.value.indexOf(taskFound), 1);
	}
	console.log('🚀 👍 ~ taskFound ~ taskFound:', taskFound);
};
