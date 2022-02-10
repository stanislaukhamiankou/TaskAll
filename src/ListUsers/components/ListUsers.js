import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUsersFilter, addNewUser, editUser } from '../redux-toolkit/toolkitSlice';
import { UserItem } from './UserItem';
import { UserForm } from './UserForm';
import {createUser} from '../helpers/helpers';
import { loadUsersAsync } from '../redux-toolkit/usersThunk';
import './ListUser.scss';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const ListUsers = () => {

	const dispatch = useDispatch();
	const { users, usersFilter } = useSelector((state) => state.toolkit);

	const [newUser, setNewUser] = useState(createUser());

	const onChange = (event) => {
		const { target } = event;
		const { id, value } = target;
		setNewUser({ ...newUser, [id]: value })
	}

	const addUser = () => {
		dispatch(addNewUser({
			id: Math.max(...users.map(user => user.id)) + 1,
			...newUser
		}));
		setNewUser(createUser());
	};

	const saveUser = (id, user) => {
		dispatch(editUser(id, user));
	};

	useEffect(() => {
		dispatch(loadUsersAsync());
	}, []);

	const deleteUser = (user) => {
		dispatch(removeUser(user))
	}

	const searchUser = (value) => {
		dispatch(setUsersFilter(value))
	}

	const filteredUsers = users?.filter(user => user.name.includes(usersFilter));
	return (
		<div className='list-users'>
			<h1>User List</h1>
			<UserForm newUser={newUser} onChange={onChange} onAddNewUser={addUser}/>
			<br/>
			<Input onChange={({ target }) => searchUser(target.value)} placeholder="search" prefix={<UserOutlined />} size="large" />
			<br/>
			<br/>
			{filteredUsers && filteredUsers.map((user) => 
				<UserItem 
					key={user.id} 
					user={user} 
					deleteUser={deleteUser}
					saveUser={saveUser} 
				/>)}
		</div>
	);
};

export default ListUsers;