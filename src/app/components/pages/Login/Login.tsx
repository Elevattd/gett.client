import React from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import useLogin from './useLogin';

const Login: React.FC<{}> = () => {
	const [handleLoginSubmit, handleLoginChange]: any = useLogin();
	return (
		<Container maxWidth='sm'>
			<Grid container direction='column' alignItems='center' justifyContent='center' sx={{ minHeight: '100vh' }}>
				<Grid item>
					<Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
						<Typography variant='h4' sx={{ mt: 1, mb: 1 }}>
							Sign In.
						</Typography>
						<Box component='form' onSubmit={handleLoginSubmit}>
							<TextField
								name='username'
								type='text'
								margin='normal'
								fullWidth
								label='Username'
								sx={{ mt: 2, mb: 1.5 }}
								required
								onChange={handleLoginChange}
							/>
							<TextField
								name='password'
								type='password'
								margin='normal'
								fullWidth
								label='Password'
								sx={{ mt: 1.5, mb: 1.5 }}
								required
								onChange={handleLoginChange}
							/>
							<Button fullWidth type='submit' variant='contained' sx={{ mt: 1.5, mb: 3 }}>
								Login
							</Button>
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;
