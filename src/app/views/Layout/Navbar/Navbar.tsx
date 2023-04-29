import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../constants/types';
import { logout } from '../../../../redux/features/auth/authSlice';

export const NavBar: React.FC<{}> = () => {
	const dispatch: AppDispatch = useDispatch();

	const {
		auth: { autenticate },
	} = useSelector((state: any) => state);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
				<Toolbar>
					<Container maxWidth='xl'>
						<Grid container direction='row' justifyContent='space-between' alignItems='center'>
							<Grid item>
								<Typography>Challenge Gett ~ Mariano Dunand</Typography>
							</Grid>
							<Grid item>
								<Stack direction='row' spacing={1}>
									{!autenticate ? (
										<>
											<Button variant='contained'>Login</Button>
											<Button variant='contained'>Register</Button>
										</>
									) : (
										<>
											<Button variant='contained' onClick={() => dispatch(logout({}))}>
												Logout
											</Button>
										</>
									)}
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
