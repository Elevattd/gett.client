import { AxiosInstance } from './axiosInstance';

export const getAllTasks = async (): Promise<any> => {
	try {
		const { data } = await AxiosInstance.get('todos');
		return data;
	} catch (error) {
		return error;
	}
};
