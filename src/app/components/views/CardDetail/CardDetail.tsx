import { Button, Card, CardActions, CardContent, Container, Modal, Typography } from '@mui/material';
import React from 'react';

const CardDetail = ({ open, handleClose, task }: any) => {
	const handleCloseModal = (e: any) => {
		e.preventDefault();
		handleClose();
	};
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			hideBackdrop={true}
			disableEscapeKeyDown={true}
		>
			<Card>
				<Typography gutterBottom variant='h4' sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
					Todo List ~ Gett challenge.
				</Typography>
				{Object.keys(task).length && (
					<Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'center', mt: 20 }}>
						<CardContent sx={{ mb: 30 }}>
							<Typography gutterBottom variant='h5' component='div'>
								Task: {task?.title?.replace(task.title.charAt(0), task.title.charAt(0).toUpperCase())}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								{task?.completed ? 'Completed' : 'Not Complete'}
							</Typography>
						</CardContent>
						<Typography variant='body1' color='text.secondary' sx={{ mb: 10 }}>
							Task number: {task?.id}
						</Typography>
						<CardActions>
							<Button size='small' onClick={handleCloseModal}>
								Cerrar
							</Button>
						</CardActions>
					</Container>
				)}
			</Card>
		</Modal>
	);
};

export default CardDetail;
