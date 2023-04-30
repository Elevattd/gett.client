import { delTask } from '../../../../redux/features/tasks/taskSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../constants/types';
import React from 'react';
import { fetchTasks } from '../../../../redux/features/tasks/taskReducer';

export const useTaskList = () => {
	const dispatch: AppDispatch = useDispatch();
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		dispatch(fetchTasks());
		setTimeout(() => setLoading(false), 1000);
	}, [dispatch]);

	const deleteTask = (id: number) => {
		dispatch(delTask(id));
	};
	return [deleteTask, loading];
};
