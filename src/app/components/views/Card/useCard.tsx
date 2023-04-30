import React from 'react';
import { delTask, getTasks } from '../../../../redux/features/tasks/taskSlice';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../../constants/types';
import usePaginator from '../Paginator/usePaginator';

const useCard: any = () => {
	const dispatch: AppDispatch = useDispatch();
	const { visibleTasks } = usePaginator();

	const deleteTask = (id: number) => {
		dispatch(delTask(id));
		// dispatch(getTasks(visibleTasks));
	};
	return [deleteTask];
};

export default useCard;
