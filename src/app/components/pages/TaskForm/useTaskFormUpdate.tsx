import React from 'react';

const useTaskFormUpdate = ({ task }: any) => {
	const [taskState, setTaskState] = React.useState(task);

	const handleChange = (e: any) => {
		const {
			target: { name, value },
		} = e;
		e.preventDefault();

		setTaskState({ ...taskState, [name]: value });
	};

	return [handleChange, setTaskState, taskState];
};

export default useTaskFormUpdate;
