import React from 'react';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';

const Home: React.FC<{}> = () => {
	return (
		<div>
			<TaskForm />
			<TaskList />
		</div>
	);
};

export default Home;
