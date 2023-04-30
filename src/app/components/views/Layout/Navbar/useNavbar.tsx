import { logout } from '../../../../../redux/features/auth/authSlice';
import { AppDispatch } from '../../../../constants/types';
import { useDispatch } from 'react-redux';

const useNavbar = () => {
	const dispatch: AppDispatch = useDispatch();

	const logoutUser = () => {
		dispatch(logout({}));
	};
	return [logoutUser];
};

export default useNavbar;
