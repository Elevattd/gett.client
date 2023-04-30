import { Box, Button, Container, Grid, MenuItem, Modal, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import useTaskFormUpdate from './useTaskFormUpdate';
import { valuesComplete } from '../../../constants/utils';

const TaskFormUpdate = ({ open, handleClose, task, updateTask }: any) => {
	console.log('🚀 👍 ~ TaskFormUpdate ~ task:', task);
	const [createTask, handleChange, setTaskState, taskState] = useTaskFormUpdate(task);

	const values = [true, false];

	const handleSubmitAndCloseMododal = (e: any) => {
		e.preventDefault();
		updateTask(taskState);
		handleClose();
	};
	useEffect(() => {
		if (open) {
			setTaskState(task);
		}
	}, [open]);

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
								{'Update Task'}
							</Typography>
							<Box component='form' onSubmit={handleSubmitAndCloseMododal}>
								<TextField
									name='title'
									type='text'
									margin='normal'
									fullWidth
									label='Description'
									sx={{ mt: 2, mb: 1.5 }}
									required
									value={taskState?.title}
									//@ts-ignore
									onChange={(e) => handleChange(e)}
								/>
								{/* <Select
									value={taskState}
									onChange={(e) => handleChange(e)}
									fullWidth
									label='Complete'
									sx={{ mt: 3 }}
								>
									{valuesComplete.length ? (
										valuesComplete?.map((value: boolean, i: any) => (
											<MenuItem id={i} value={value}>
												{value === 1 ? 'Complete' : 'Incomplete'}
											</MenuItem>
										))
									) : (
										<MenuItem value={1}>1</MenuItem>
									)}
								</Select> */}
								<Button fullWidth type='submit' variant='contained' sx={{ mt: 1.5, mb: 3 }}>
									{'Update Task'}
								</Button>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Modal>
	);
};

export default TaskFormUpdate;
