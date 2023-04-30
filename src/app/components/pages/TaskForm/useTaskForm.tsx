import React, { ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import { postTask } from '../../../../redux/features/tasks/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../constants/types';
import { ITask } from '../../../constants/interfaces.interfaces';

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

		setTask({ ...task, [name]: value });
	};

	const createTask = (e: any, cb: any) => {
		e.preventDefault();
		dispatch(postTask(task));
		cb();
	};

	// const handleSubmitAndCloseMododal = (cb: any) => {
	// 	createTask(e);

	// };
	return [createTask, handleChange, setTask];
};

export default useTaskForm;
