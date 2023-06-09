import React, { useState } from 'react';
import { validateCredentials } from '../../../services/authServices';
import { AppDispatch, LoginType } from '../../../constants/types';
import { useDispatch } from 'react-redux';
import { login } from '../../../../redux/features/auth/authSlice';
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
			const user = validateCredentials(loginData);
			if (!user) {
				return 'User not match';
			} else {
				dispatch(login(user));
			}
		} catch (error) {
			return error;
		}
	};
	const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLoginData({ ...loginData, [name]: value });
	};
	return [handleLoginSubmit, handleLoginChange];
};

export default useLogin;
