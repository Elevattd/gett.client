import './App.css';
import Login from './app/pages/Login/Login';
import Home from './app/pages/Home/Home';
import TaskForm from './app/pages/TaskForm/TaskForm';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './app/constants/types';
import { login } from './redux/features/auth/authSlice';
import { RouterLayout } from './app/views/Layout/RouterLayout';

export const App: React.FC<{}> = () => {
	const dispatch: AppDispatch = useDispatch();
	const {
		auth: { autenticate },
	} = useSelector((state: any) => state);

	// const [login, setLogin] = useState(false);

	useEffect(() => {
		const userJson = localStorage.getItem('user');
		const user = userJson ? JSON.parse(userJson) : null;
		if (user) {
			dispatch(login(user));
		}
	}, []);

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<RouterLayout />}>
						<Route path='/' element={autenticate ? <Home /> : <Login />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
