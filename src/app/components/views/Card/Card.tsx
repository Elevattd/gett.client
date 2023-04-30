import React from 'react';
import useCard from './useCard';
import { ITask } from '../../../constants/interfaces.interfaces';
import { CardTask } from '../../../constants/types';
import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import CardDetail from '../CardDetail/CardDetail';
import TaskFormUpdate from '../../pages/TaskForm/TaskFormUpdate';

export const CardComponent: React.FC<CardTask> = ({ userId, id, title, completed }: ITask) => {
	const [openCard, setOpenCard] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [task, setTask] = React.useState({ userId, id, title, completed });
	const [deleteTask, updateTask] = useCard();
	return (
		<Card sx={{ minHeight: 200 }}>
			<CardContent>
				<Typography variant='h6' sx={{ mb: 1.5 }}>
					{title.substring(0, 15) + ' ...'}
				</Typography>
				<Divider />
				<Typography sx={{ mt: 1.5 }}>Task: {id}</Typography>
				<Typography sx={{ mt: 1.5 }}>{completed ? 'OK' : 'NO'}</Typography>
			</CardContent>
			<Button fullWidth variant='contained' size='small' onClick={() => setOpenCard(true)}>
				More info.
			</Button>
			<CardActions>
				<Button fullWidth variant='contained' size='small' onClick={() => deleteTask(id)}>
					Delete Task
				</Button>
				<Button fullWidth variant='contained' size='small' onClick={() => setOpen(true)}>
					Update Task
				</Button>
			</CardActions>
			{openCard && <CardDetail open={openCard} handleClose={() => setOpenCard(false)} task={task} />}
			{open && (
				<TaskFormUpdate open={open} handleClose={() => setOpen(false)} task={task} updateTask={updateTask} />
			)}
		</Card>
	);
};
