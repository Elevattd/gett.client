import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPaginationState } from '../../../app/constants/interfaces.interfaces';
import { setCurrentPageAction, setPerPageAction } from './paginationReducer';

const initialState: IPaginationState = {
	currentPage: 1,
	perPage: 5,
};

const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setCurrentPage: setCurrentPageAction,
		setPerPage: setPerPageAction,
	},
});

export const { setCurrentPage, setPerPage } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
