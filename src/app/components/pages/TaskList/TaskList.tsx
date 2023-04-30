import React from 'react';
import Paginator from '../../views/Paginator/Paginator';
import { ITask } from '../../../constants/interfaces.interfaces';
import { useTaskList } from './useTaskList';
import { useSelector } from 'react-redux';
import { CardComponent } from '../../views/Card/Card';
import { Box, CircularProgress, Container, Grid } from '@mui/material';

export const TaskList: React.FC<{}> = () => {
	const {
		tasks: { visibleTasks },
	} = useSelector((state: any) => state);

	const [loading] = useTaskList();

	return (
		<Container maxWidth='xl'>
			{loading ? (
				<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
					<CircularProgress />
				</Box>
			) : (
				<>
					<>
						{visibleTasks?.length !== 0 ? (
							<Grid container spacing={2} direction='row'>
								{visibleTasks?.map((task: ITask) => {
									const { userId, id, title, completed } = task;
									return (
										<Grid item xs={3}>
											<CardComponent
												userId={userId}
												id={id}
												title={title}
												completed={completed}
											/>
										</Grid>
									);
								})}
							</Grid>
						) : (
							'No tasks'
						)}
					</>
					<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Paginator />
					</Box>
				</>
			)}
		</Container>
	);
};

export default TaskList;
