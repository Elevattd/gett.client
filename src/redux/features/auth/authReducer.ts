import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { IAuthSliceState } from '../../../app/constants/interfaces';
import { Action } from '../../../app/constants/types';

export const setCredentias: CaseReducer<IAuthSliceState, PayloadAction<{}>> = (
	state: IAuthSliceState,
	action: Action,
) => {
	const { username, password, permissions }: any = action?.payload;
	state.username = username;
	state.password = password;
	state.permissions = permissions;
	state.autenticate = true;
	localStorage.setItem('user', JSON.stringify(state));
};

export const logOut: CaseReducer<IAuthSliceState, PayloadAction<{}>> = (state: IAuthSliceState) => {
	state.username = null;
	state.password = null;
	state.permissions = [];
	state.autenticate = false;
	localStorage.removeItem('user');
};
