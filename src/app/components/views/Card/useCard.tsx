import { delTask } from '../../../../redux/features/tasks/taskSlice';
import { AppDispatch } from '../../../constants/types';
import { useDispatch } from 'react-redux';
import { useNotification } from '../../../../config/context/Notification.context';

const useCard: any = () => {
	const dispatch: AppDispatch = useDispatch();
	const { NotificationManager } = useNotification();

	const deleteTask = (id: number) => {
		NotificationManager(`Task with: ${id}, deleted successfully.`, 'info');
		dispatch(delTask(id));
	};

	return [deleteTask];
};

export default useCard;
