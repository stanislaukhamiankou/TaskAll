import UsersService from '../services/services';
import { usersLoadStart, usersLoadSuccess } from './toolkitSlice';

export const loadUsersAsync = () => (dispatch) => {
	dispatch(usersLoadStart());

	UsersService.getAllUsers()
		.then((response) => dispatch(usersLoadSuccess(response.data)));
};