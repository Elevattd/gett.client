import React, { useEffect } from 'react';
import { getTasks } from '../../../../redux/features/tasks/taskSlice';
import { AppDispatch, RootState } from '../../../constants/types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setPerPage } from '../../../../redux/features/pagination/paginationSlice';

const usePaginator: any = (): any => {
	const dispatch: AppDispatch = useDispatch();

	const {
		tasks: { value: tasks },
		pagination: { currentPage, perPage },
	} = useSelector((state: RootState) => state);

	const startIndex = (currentPage - 1) * perPage;
	const endIndex = startIndex + perPage;
	const visibleTasks = tasks.slice(startIndex, endIndex);

	const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
		dispatch(setCurrentPage(value));
	};

	const handlePerPageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		dispatch(setPerPage(Number(event.target.value)));
		dispatch(getTasks(visibleTasks));
	};

	useEffect(() => {
		dispatch(getTasks(visibleTasks));
	}, [currentPage, perPage]);

	return { tasks, currentPage, perPage, visibleTasks, handlePaginationChange, handlePerPageChange };
};

export default usePaginator;
