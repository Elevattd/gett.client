import React from 'react';
import Paginator from '../../views/Paginator/Paginator';
import { ITask } from '../../../constants/interfaces.interfaces';
import { useTaskList } from './useTaskList';
import { useSelector } from 'react-redux';
import { CardComponent } from '../../views/Card/Card';
import { Box, Button, CircularProgress, Container, Grid } from '@mui/material';
import TaskForm from '../TaskForm/TaskForm';

export const TaskList: React.FC<{}> = () => {
	const {
		tasks: { visibleTasks },
	} = useSelector((state: any) => state);

	const [loading] = useTaskList();
	const [open, setOpen] = React.useState(false);

	return (
		<Container maxWidth='xl'>
			<>
				<Button
					fullWidth
					type='submit'
					variant='contained'
					sx={{ mt: 1.5, mb: 3 }}
					onClick={() => setOpen(true)}
				>
					Create Task
				</Button>
			</>
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
			{open && <TaskForm open={open} handleClose={() => setOpen(false)} />}
		</Container>
	);
};

export default TaskList;
