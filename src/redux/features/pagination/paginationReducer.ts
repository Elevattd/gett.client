import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { IPaginationState } from '../../../app/constants/interfaces.interfaces';

export const setCurrentPageAction: CaseReducer<IPaginationState, PayloadAction<number>> = (state, action) => {
	state.currentPage = action.payload;
};
export const setPerPageAction: CaseReducer<IPaginationState, PayloadAction<number>> = (state, action) => {
	state.perPage = action.payload;
};
