import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../global/types';
import { delTask } from '../../../redux/features/tasks/taskSlice';

export const useTaskList = () => {
	const dispatch: AppDispatch = useDispatch();

	const deleteTask = (id: number) => {
		dispatch(delTask(id));
	};
	return [deleteTask];
};
