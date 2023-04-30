import useTaskForm from './useTaskForm';
import { Box, Button, Container, Grid, Modal, Paper, TextField, Typography } from '@mui/material';

const TaskForm = ({ open, handleClose }: any) => {
	const [createTask, handleChange] = useTaskForm();

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			hideBackdrop={true}
			disableEscapeKeyDown={true}
		>
			<Container maxWidth='sm'>
				<Grid
					container
					direction='column'
					alignItems='center'
					justifyContent='center'
					sx={{ minHeight: '100vh' }}
				>
					<Grid item>
						<Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
							<Typography variant='h4' sx={{ mt: 1, mb: 1 }}>
								{'New Task'}
							</Typography>
							<Box component='form' onSubmit={(e) => createTask(e, handleClose)}>
								<TextField
									name='title'
									type='text'
									margin='normal'
									fullWidth
									label='Description'
									sx={{ mt: 2, mb: 1.5 }}
									required
									//@ts-ignore
									onChange={(e) => handleChange(e)}
								/>
								<Button fullWidth type='submit' variant='contained' sx={{ mt: 1.5, mb: 3 }}>
									{'Create Task'}
								</Button>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Modal>
	);
};

export default TaskForm;
