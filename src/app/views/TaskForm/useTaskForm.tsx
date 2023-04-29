import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../global/types';
import { postTask } from '../../../redux/features/tasks/taskSlice';

const useTaskForm = () => {
	const {
		auth: { userId },
	}: RootState = useSelector((state: RootState) => state);

	const dispatch: AppDispatch = useDispatch();

	const INITIAL_STATE = {
		userId: userId ?? '',
		id: 39,
		title: '',
		completed: false,
	};

	const [task, setTask] = useState(INITIAL_STATE);

	const handleChange = (e: any) => {
		const {
			target: { name, value },
		} = e;
		e.preventDefault();
		console.log(name);
		console.log(value);
		setTask({ ...task, [name]: value });
	};

	const createTask = (e: any) => {
		e.preventDefault();
		dispatch(postTask(task));
		console.log(task);
	};
	return [createTask, handleChange];
};

export default useTaskForm;
