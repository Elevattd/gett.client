import React from 'react';
import { fetchTasks } from '../../../../redux/features/tasks/taskReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../constants/types';
import { useNotification } from '../../../../config/context/Notification.context';

export const useTaskList = () => {
	const {
		auth: { username },
	} = useSelector((state: any) => state);
	const { NotificationManager } = useNotification();
	const dispatch: AppDispatch = useDispatch();
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		dispatch(fetchTasks());
		NotificationManager(`Welcome ${username}.`, 'success');
		setTimeout(() => setLoading(false), 1000);
	}, [dispatch]);

	return [loading];
};
