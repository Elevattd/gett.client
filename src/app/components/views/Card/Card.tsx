import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';
import { CardTask } from '../../../constants/types';
import { ITask } from '../../../constants/interfaces.interfaces';
import useCard from './useCard';

export const CardComponent: React.FC<CardTask> = ({ userId, id, title, completed }: ITask) => {
	const [deleteTask] = useCard();
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
			<CardActions>
				<Button fullWidth variant='contained' size='small' onClick={() => deleteTask(id)}>
					Delete Task
				</Button>
			</CardActions>
		</Card>
	);
};
