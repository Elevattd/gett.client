import React from 'react';
import TaskList from '../../views/TaskList/TaskList';
import TaskForm from '../../views/TaskForm/TaskForm';

const Home = () => {
	return (
		<div>
			<TaskForm />
			<TaskList />
		</div>
	);
};

export default Home;
