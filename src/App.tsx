import './App.css';
import Login from './app/pages/Login/Login';
import Home from './app/pages/Home/Home';
import TaskForm from './app/views/TaskForm/TaskForm';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
