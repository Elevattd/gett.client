import React, { ChangeEventHandler, useEffect, useState } from 'react';
import { postTask } from '../../../../redux/features/tasks/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../constants/types';
import { ITask } from '../../../constants/interfaces.interfaces';

const useTaskFormUpdate = ({ task }: any) => {
	console.log('🚀 👍 ~ useTaskFormUpdate ~ task:', task);
	const dispatch: AppDispatch = useDispatch();

	const [taskState, setTaskState] = useState(task);

	const handleChange = (e: any) => {
		const {
			target: { name, value },
		} = e;
		e.preventDefault();

		setTaskState({ ...taskState, [name]: value });
	};

	const createTask = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();
		dispatch(postTask(task));
	};
	return [createTask, handleChange, setTaskState, taskState];
};

export default useTaskFormUpdate;
