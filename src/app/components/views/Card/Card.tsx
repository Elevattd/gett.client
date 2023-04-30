import React from 'react';
import useCard from './useCard';
import { ITask } from '../../../constants/interfaces.interfaces';
import { CardTask } from '../../../constants/types';
import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import CardDetail from '../CardDetail/CardDetail';

export const CardComponent: React.FC<CardTask> = ({ userId, id, title, completed }: ITask) => {
	const [open, setOpen] = React.useState(false);
	const [deleteTask, updateTask] = useCard();
	const task = { userId, id, title, completed };
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
			<Button fullWidth variant='contained' size='small' onClick={() => setOpen(true)}>
				More info.
			</Button>
			<CardActions>
				<Button fullWidth variant='contained' size='small' onClick={() => deleteTask(id)}>
					Delete Task
				</Button>
				<Button fullWidth variant='contained' size='small' onClick={() => updateTask(id)}>
					Update Task
				</Button>
			</CardActions>
			{open && <CardDetail open={open} handleClose={() => setOpen(false)} task={task} />}
		</Card>
	);
};
