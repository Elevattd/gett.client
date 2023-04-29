import React from 'react';
import { useSelector } from 'react-redux';
import { useTaskList } from './useTaskList';

const TaskList = () => {
	const {
		tasks: { value: tasks },
	} = useSelector((state: any) => state);
	console.log('🚀 👍 ~ TaskList ~ tasks:', tasks);
	const [deleteTask] = useTaskList();

	return (
		<div>
			{tasks?.map((task: any) => {
				const { title, id } = task;
				return (
					<div key={id}>
						<p>Task: {id}</p>
						<h3>{title}</h3>
						<button onClick={() => deleteTask(id)}>Delete</button>
					</div>
				);
			})}
		</div>
	);
};

export default TaskList;
