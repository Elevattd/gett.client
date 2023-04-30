import './App.css';

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './app/constants/types';
import { login } from './redux/features/auth/authSlice';
import { RouterLayout } from './app/components/views/Layout/RouterLayout';
import Home from './app/components/pages/Home/Home';
import Login from './app/components/pages/Login/Login';
import { NotificationProvider } from './config/context/Notification.context';

export const App: React.FC<{}> = () => {
	const dispatch: AppDispatch = useDispatch();
	const {
		auth: { autenticate },
	} = useSelector((state: any) => state);

	useEffect(() => {
		const userJson = localStorage.getItem('user');
		const user = userJson ? JSON.parse(userJson) : null;
		if (user) {
			dispatch(login(user));
		}
	}, []);

	return (
		<div className='App'>
			<NotificationProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<RouterLayout />}>
							<Route path='/' element={autenticate ? <Home /> : <Login />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</NotificationProvider>
		</div>
	);
};
