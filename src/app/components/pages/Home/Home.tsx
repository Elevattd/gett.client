import React from 'react';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import { Container } from '@mui/material';

const Home: React.FC<{}> = () => {
	return (
		<Container maxWidth='xl' sx={{ mt: 15 }}>
			<TaskList />
		</Container>
	);
};

export default Home;
