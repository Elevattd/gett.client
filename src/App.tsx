import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './app/global/types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './app/pages/Login/Login';
import Home from './app/pages/Home/Home';
import { useState } from 'react';
import TaskForm from './app/views/TaskForm/TaskForm';

function App() {
	//cambiarlo por el estado global ....
	const [autenticate, setAutenticate] = useState(true);

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={autenticate ? <Home /> : <Login />} />
					<Route path='create-task' element={autenticate ? <TaskForm /> : <Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
