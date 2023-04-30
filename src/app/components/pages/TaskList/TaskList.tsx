import React from 'react';
import { useSelector } from 'react-redux';
import { useTaskList } from './useTaskList';
import { Box, Container, Grid } from '@mui/material';
import { CardComponent } from '../../views/Card/Card';
import { ITask } from '../../../constants/interfaces.interfaces';

export const TaskList: React.FC<{}> = () => {
	const {
		tasks: { value: tasks },
	} = useSelector((state: any) => state);
	const [deleteTask] = useTaskList();

	return (
		<Container maxWidth='xl'>
			{tasks?.length !== 0 ? (
				<Grid container spacing={2} direction='row'>
					{tasks?.map((task: ITask) => {
						const { userId, id, title, completed } = task;
						return (
							<Grid item xs={3}>
								<CardComponent userId={userId} id={id} title={title} completed={completed} />
							</Grid>
						);
					})}
				</Grid>
			) : (
				'No tasks'
			)}
		</Container>
	);
};

export default TaskList;
