import { IUser } from '../constants/interfaces';
import { users } from '../constants/mockupUsers';
import { LoginType } from '../constants/types';

export const validateCredentials = ({ username, password }: LoginType): IUser | undefined => {
	return users?.find((user) => user.username === username && user.password === password);
};
