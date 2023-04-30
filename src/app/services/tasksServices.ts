import { AxiosInstance } from './axiosInstance';

export const getAllTasks = async (): Promise<any> => {
	try {
		const { data } = await AxiosInstance.get('todos');
		console.log('🚀 👍 ~ getAllTasks ~ data:', data);
		return data;
	} catch (error) {
		return error;
	}
};
