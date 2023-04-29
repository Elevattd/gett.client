import React, { useState } from 'react';
import { validateCredentials } from '../../services/authServices';
import { AppDispatch, LoginType } from '../../constants/types';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/features/auth/authSlice';
import { NotificationManager } from 'react-notifications';

const useLogin = () => {
	const dispatch: AppDispatch = useDispatch();

	const INITIAL_STATE_LOGIN = {
		username: '',
		password: '',
	};
	const [loginData, setLoginData] = useState<LoginType>(INITIAL_STATE_LOGIN);

	const handleLoginSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		try {
			e.preventDefault();
			console.log(loginData);
			const user = validateCredentials(loginData);
			console.log('🚀 👍 ~ handleLoginSubmit ~ user:', user);
			if (!user) {
				return 'NO SE ENCONTRO AL USUARIO';
			} else {
				dispatch(login(user));
				// NotificationManager.success('', '', 3000);
			}
		} catch (error) {
			return error;
		}
	};
	const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLoginData({ ...loginData, [name]: value });
		console.log('🚀 👍 ~ handleLoginChange ~ loginData:', loginData);
	};
	return [handleLoginSubmit, handleLoginChange];
};

export default useLogin;
